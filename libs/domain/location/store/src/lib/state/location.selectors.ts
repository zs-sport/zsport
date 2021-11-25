import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LOCATION_FEATURE_KEY } from '@zsport/api';

import { locationAdapter, LocationPartialState, State } from './location.reducer';

const { selectAll, selectEntities } = locationAdapter.getSelectors();

export const getLocationState = createFeatureSelector<LocationPartialState, State>(LOCATION_FEATURE_KEY);

export const getLocationError = createSelector(getLocationState, (state: State) => state.error);

export const getLocationLoading = createSelector(getLocationState, (state: State) => state.loading);

export const getSelectedId = createSelector(getLocationState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(
    getLocationState,
    (state: State) => state.isNewEntityButtonEnabled
);

export const selectLocationEntities = createSelector(getLocationState, selectEntities);

export const selectAllLocation = createSelector(getLocationState, selectAll);

export const selectLocation = createSelector(
    selectLocationEntities,
    getSelectedId,
    (locationEntities, locationID) => locationEntities[locationID]
);
