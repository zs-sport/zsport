import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Event, EVENT_FEATURE_KEY, EventEntity, Result, ResultEntity } from '@zsport/api';

import * as eventActions from './event.actions';

export interface State extends EntityState<EventEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface EventPartialState {
    readonly [EVENT_FEATURE_KEY]: State;
}

export const eventAdapter: EntityAdapter<EventEntity> = createEntityAdapter<EventEntity>({
    selectId: (model: EventEntity) => model.uid || '',
});

export const initialState: State = eventAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedEventId: null,
});

export const eventReducer = createReducer(
    initialState,
    on(eventActions.addEventSuccess, (state, { event }) => eventAdapter.addOne(event, state)),
    on(eventActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(eventActions.clearEvents, (state) => eventAdapter.removeAll(state)),
    on(eventActions.deleteEventSuccess, (state, { eventId }) => eventAdapter.removeOne(eventId, state)),
    on(eventActions.listEventsSuccess, (state, { events }) => eventAdapter.upsertMany(events, state)),
    on(eventActions.ListEventsByCompetitionIdSuccess, (state, { events }) => eventAdapter.upsertMany(events, state)),
    on(eventActions.listEventsByDaySuccess, (state, { events }) => eventAdapter.upsertMany(events, state)),
    on(eventActions.loadEventSuccess, (state, { event }) => eventAdapter.upsertOne(event, state)),
    on(eventActions.listResultsByEventIdSuccess, (state, { results, eventId }) => {
        let event: EventEntity = state.entities[eventId] as EventEntity;

        event = { ...event, results };

        return eventAdapter.updateOne({ id: event.uid || '', changes: event }, state);
    }),
    on(eventActions.selectEvent, (state, { eventId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedEventId: eventId,
    })),
    on(eventActions.setSelectedEventId, (state, { eventId }) => ({ ...state, selectedId: eventId })),
    on(eventActions.updateEventSuccess, (state, { event }) => eventAdapter.updateOne(event, state)),
    on(eventActions.updateResultByEventIdSuccess, (state, { result, eventId }) => {
        let event: EventEntity = state.entities[eventId] as EventEntity;

        const entityResults: ResultEntity[] = event.results || [];
        const resultIndex = entityResults.findIndex((entityResult) => entityResult.uid === result.uid);

        entityResults[resultIndex] = result;

        event = { ...event, results: entityResults };

        return eventAdapter.updateOne({ id: event.uid || '', changes: event }, state);
    })
);

export function reducer(state: State | undefined, action: Action) {
    return eventReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = eventAdapter.getSelectors();
