import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventEntity, EVENT_FEATURE_KEY } from '@zsport/api';

import { eventAdapter, EventPartialState, State } from './event.reducer';

const { selectAll, selectEntities } = eventAdapter.getSelectors();

export const getEventState = createFeatureSelector<EventPartialState, State>(EVENT_FEATURE_KEY);

export const getEventError = createSelector(getEventState, (state: State) => state.error);

export const getEventLoading = createSelector(getEventState, (state: State) => state.loading);

export const getSelectedId = createSelector(getEventState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(getEventState, (state: State) => state.isNewEntityButtonEnabled);

export const selectEventEntities = createSelector(getEventState, selectEntities);

export const selectAllEvent = createSelector(getEventState, selectAll);

export const selectEvent = createSelector(
    selectEventEntities,
    getSelectedId,
    (eventEntities, eventID) => eventEntities[eventID]
);

export const selectEventById = () =>
    createSelector(selectEventEntities, (eventEntities: Dictionary<EventEntity>, props: any) => {
        return eventEntities[props.eventId];
    });

export const selectEventsByCompetitionId = () =>
    createSelector(selectAllEvent, (events: EventEntity[], props: any) =>
        events.filter((event) => event.competitionId === props.competitionId).sort((a, b) => (a < b ? -1 : 1))
    );

export const selectEventsByDay = () =>
    createSelector(selectAllEvent, (events: EventEntity[], props: any) =>
        events.filter((event) => event.eventDayTime > props.day && event.eventDayTime <= props.nextDay)
    );
