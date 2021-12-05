import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LocationDataService, LocationEntity, LocationUtilService } from '@zsport/api';

import * as locationActions from './location.actions';

@Injectable()
export class LocationEffects {
    public addLocation = createEffect(() =>
        this.actions$.pipe(
            ofType(locationActions.addLocation),
            switchMap((action) =>
                this.locationDataService
                    .add$(this.locationUtilService.convertEntityToModel(action.location, false))
                    .pipe(
                        map((locationModel) => {
                            return locationActions.addLocationSuccess({
                                location: this.locationUtilService.convertModelToEntity(
                                    locationModel
                                ) as LocationEntity,
                            });
                        })
                    )
            )
        )
    );
    public listLocations = createEffect(() =>
        this.actions$.pipe(
            ofType(locationActions.listLocations),
            switchMap(() =>
                this.locationDataService.list$().pipe(
                    map((locationModels) => {
                        return locationActions.listLocationsSuccess({
                            locations: locationModels.map(
                                (locationModel) =>
                                    this.locationUtilService.convertModelToEntity(locationModel) as LocationEntity
                            ),
                        });
                    })
                )
            )
        )
    );
    public listLocationsByCountryId = createEffect(() =>
        this.actions$.pipe(
            ofType(locationActions.listLocationsByCountryId),
            switchMap((action) =>
                this.locationDataService.listLocationsByCountryId$(action.countryId).pipe(
                    map((locationModels) => {
                        return locationActions.listLocationsByCountryIdSuccess({
                            locations: locationModels.map(
                                (locationModel) =>
                                    this.locationUtilService.convertModelToEntity(locationModel) as LocationEntity
                            ),
                        });
                    }),
                    catchError((error) => {
                        console.log(error);

                        return of(error);
                    })
                )
            )
        )
    );
    public loadLocation = createEffect(() =>
        this.actions$.pipe(
            ofType(locationActions.loadLocation),
            switchMap((action) =>
                this.locationDataService.load$(action.uid).pipe(
                    map((locationModel) => {
                        return locationActions.loadLocationSuccess({
                            location: this.locationUtilService.convertModelToEntity(locationModel) as LocationEntity,
                        });
                    })
                )
            )
        )
    );
    public updateLocation = createEffect(() =>
        this.actions$.pipe(
            ofType(locationActions.updateLocation),
            switchMap((action) =>
                this.locationDataService
                    .update$(this.locationUtilService.convertEntityToModel(action.location, false))
                    .pipe(
                        map((locationModel) => {
                            return locationActions.updateLocationSuccess({
                                location: {
                                    id: locationModel.uid || '',
                                    changes: this.locationUtilService.convertModelToEntity(locationModel),
                                },
                            });
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private locationDataService: LocationDataService,
        private locationUtilService: LocationUtilService
    ) {}
}
