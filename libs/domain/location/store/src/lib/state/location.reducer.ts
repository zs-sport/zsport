import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { LOCATION_FEATURE_KEY, LocationEntity } from '@zsport/api';

import * as locationActions from './location.actions';

export interface State extends EntityState<LocationEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface LocationPartialState {
    readonly [LOCATION_FEATURE_KEY]: State;
}

export const locationAdapter: EntityAdapter<LocationEntity> = createEntityAdapter<LocationEntity>({
    selectId: (model: LocationEntity) => model.uid || '',
});

export const initialState: State = locationAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedLocationId: null,
});

export const locationReducer = createReducer(
    initialState,
    on(locationActions.addLocationSuccess, (state, { location }) =>
        locationAdapter.addOne(location as LocationEntity, state)
    ),
    on(locationActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(locationActions.selectLocation, (state, { locationId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedLocationId: locationId,
    })),
    on(locationActions.updateLocationSuccess, (state, { location }) => locationAdapter.updateOne(location, state)),
    on(locationActions.deleteLocationSuccess, (state, { locationId }) => locationAdapter.removeOne(locationId, state)),
    on(locationActions.listLocationsSuccess, (state, { locations }) =>
        locationAdapter.upsertMany(locations as LocationEntity[], state)
    ),
    on(locationActions.listLocationsByCountryIdSuccess, (state, { locations }) =>
        locationAdapter.upsertMany(locations, state)
    ),
    on(locationActions.loadLocationSuccess, (state, { location }) =>
        locationAdapter.upsertOne(location as LocationEntity, state)
    ),
    on(locationActions.clearLocations, (state) => locationAdapter.removeAll(state)),
    on(locationActions.setSelectedLocationId, (state, { locationId }) => ({ ...state, selectedId: locationId }))
);

export function reducer(state: State | undefined, action: Action) {
    return locationReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = locationAdapter.getSelectors();
