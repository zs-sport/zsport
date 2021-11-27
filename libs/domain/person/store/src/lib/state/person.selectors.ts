import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PERSON_FEATURE_KEY } from '@zsport/api';

import { personAdapter, PersonPartialState, State } from './person.reducer';

const { selectAll, selectEntities } = personAdapter.getSelectors();

export const getPersonState = createFeatureSelector<PersonPartialState, State>(PERSON_FEATURE_KEY);

export const getPersonError = createSelector(getPersonState, (state: State) => state.error);

export const getPersonLoading = createSelector(getPersonState, (state: State) => state.loading);

export const getSelectedId = createSelector(getPersonState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(
    getPersonState,
    (state: State) => state.isNewEntityButtonEnabled
);

export const selectPersonEntities = createSelector(getPersonState, selectEntities);

export const selectAllPerson = createSelector(getPersonState, selectAll);

export const selectPerson = createSelector(
    selectPersonEntities,
    getSelectedId,
    (personEntities, personID) => personEntities[personID]
);
