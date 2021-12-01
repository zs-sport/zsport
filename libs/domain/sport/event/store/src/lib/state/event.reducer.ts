import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { EVENT_FEATURE_KEY, EventEntity } from '@zsport/api';

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
    on(eventActions.selectEvent, (state, { eventId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedEventId: eventId,
    })),
    on(eventActions.updateEventSuccess, (state, { event }) => eventAdapter.updateOne(event, state)),
    on(eventActions.deleteEventSuccess, (state, { eventId }) => eventAdapter.removeOne(eventId, state)),
    on(eventActions.listEventsSuccess, (state, { events }) => eventAdapter.upsertMany(events, state)),
    on(eventActions.ListEventsByCompetitionIdSuccess, (state, { events }) => eventAdapter.upsertMany(events, state)),
    on(eventActions.listEventsByDaySuccess, (state, { events }) => eventAdapter.upsertMany(events, state)),
    on(eventActions.loadEventSuccess, (state, { event }) => eventAdapter.upsertOne(event, state)),
    on(eventActions.clearEvents, (state) => eventAdapter.removeAll(state)),
    on(eventActions.setSelectedEventId, (state, { eventId }) => ({ ...state, selectedId: eventId }))
);

export function reducer(state: State | undefined, action: Action) {
    return eventReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = eventAdapter.getSelectors();
