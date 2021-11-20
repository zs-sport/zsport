import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    EntityQuantityDataService,
    EntityQuantityEntity,
    EntityQuantityModel,
    EntityQuantityUtilService,
} from '@zsport/api';

import * as entityQuantityActions from './entity-quantity.actions';

@Injectable()
export class EntityQuantityEffects {
    public constructor(
        private actions$: Actions,
        private entityQuantityDataService: EntityQuantityDataService,
        private entityQuantityUtilService: EntityQuantityUtilService
    ) {}

    public addEntityQuantity = createEffect(() =>
        this.actions$.pipe(
            ofType(entityQuantityActions.addEntityQuantity),
            switchMap((action) =>
                this.entityQuantityDataService
                    .add$(this.entityQuantityUtilService.convertEntityToModel(action.entityQuantity, true))
                    .pipe(
                        map((entityQuantity) => {
                            return entityQuantityActions.addEntityQuantitySuccess({
                                entityQuantity: this.entityQuantityUtilService.convertModelToEntity(
                                    entityQuantity
                                ) as EntityQuantityEntity,
                            });
                        })
                    )
            )
        )
    );
    public listEntityQuantitys = createEffect(() =>
        this.actions$.pipe(
            ofType(entityQuantityActions.listEntityQuantitys),
            switchMap(() =>
                this.entityQuantityDataService.list$().pipe(
                    map((entityQuantitys) => {
                        return entityQuantityActions.listEntityQuantitysSuccess({
                            entityQuantitys: entityQuantitys as EntityQuantityEntity[],
                        });
                    })
                )
            )
        )
    );
    public loadEntityQuantity = createEffect(() =>
        this.actions$.pipe(
            ofType(entityQuantityActions.loadEntityQuantity),
            switchMap((action) =>
                this.entityQuantityDataService.load$(action.uid).pipe(
                    map((entityQuantity) => {
                        return entityQuantityActions.loadEntityQuantitySuccess({
                            entityQuantity: entityQuantity
                                ? { ...(entityQuantity as EntityQuantityModel) }
                                : entityQuantity,
                        });
                    }),
                    catchError((error) => {
                        return of(entityQuantityActions.loadEntityQuantityFail(error));
                    })
                )
            )
        )
    );
    public searchEntityQuantitys = createEffect(() =>
        this.actions$.pipe(
            ofType(entityQuantityActions.search),
            switchMap((action) => {
                if (!!action.term) {
                    return this.entityQuantityDataService.search$(action.term).pipe(
                        map((entityQuantitys) => {
                            return entityQuantityActions.searchSuccess({
                                result: entityQuantitys as EntityQuantityEntity[],
                            });
                        }),
                        catchError((error) => {
                            return of(entityQuantityActions.searchFailed({ error: error as string }));
                        })
                    );
                } else {
                    return of(entityQuantityActions.searchSuccess({ result: [] }));
                }
            })
        )
    );
    public updateEntityQuantity = createEffect(() =>
        this.actions$.pipe(
            ofType(entityQuantityActions.updateEntityQuantity),
            switchMap((action) =>
                this.entityQuantityDataService
                    .update$(this.entityQuantityUtilService.convertEntityToModel(action.entityQuantity, true))
                    .pipe(
                        map((entityQuantity) => {
                            return entityQuantityActions.updateEntityQuantitySuccess({
                                entityQuantity: {
                                    id: entityQuantity.uid || '',
                                    changes: this.entityQuantityUtilService.convertModelToEntity(entityQuantity),
                                },
                            });
                        })
                    )
            )
        )
    );
}
