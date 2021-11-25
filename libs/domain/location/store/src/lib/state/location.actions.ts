import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { LocationEntity } from '@zsport/api';

export const addLocation = createAction('[Location] Add Location', props<{ location: LocationEntity }>());

export const addLocationFail = createAction('[Location] Add Location Fail', props<{ error: Error }>());

export const addLocationSuccess = createAction(
    '[Location] Add Location Success',
    props<{ location: LocationEntity }>()
);

export const changeNewEntityButtonEnabled = createAction(
    '[Location Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearLocations = createAction('[Location] Clear Locations');

export const deleteLocation = createAction('[Location] Delete Location', props<{ locationId: string }>());

export const deleteLocationFail = createAction('[Location] Delete Location Fail', props<{ error: Error }>());

export const deleteLocationSuccess = createAction(
    '[Location] Delete Location Success',
    props<{ locationId: string }>()
);

export const listLocations = createAction('[Location] List Locations');

export const listLocationsFail = createAction('[Location] List Locations FAIL', props<{ error: Error }>());

export const listLocationsSuccess = createAction(
    '[Location] List Locations Success',
    props<{ locations: LocationEntity[] }>()
);

export const listLocationsByCategoryId = createAction(
    '[Locations] List Locations By Category Id',
    props<{ categoryId: string }>()
);

export const listLocationsByCategoryIdSuccess = createAction(
    '[Locations] List Locations By Category Id Success',
    props<{ locations: LocationEntity[] }>()
);

export const loadLocation = createAction('[Location] Load Location', props<{ uid: string }>());

export const loadLocationFail = createAction('[Location] Load Location FAIL', props<{ error: Error }>());

export const loadLocationSuccess = createAction(
    '[Location] Load Location Success',
    props<{ location: LocationEntity }>()
);

export const selectLocation = createAction('[Location] Select Location', props<{ locationId: string }>());

export const setSelectedLocationId = createAction(
    '[Location Admin] Set Selected Location Id',
    props<{ locationId: string }>()
);

export const updateLocation = createAction('[Location] Update Location', props<{ location: LocationEntity }>());

export const updateLocationFail = createAction('[Location] Update Location Fail', props<{ error: Error }>());

export const updateLocationSuccess = createAction(
    '[Location] Update Location Success',
    props<{ location: Update<LocationEntity> }>()
);
