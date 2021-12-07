import { of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    Association,
    AssociationDataService,
    AssociationEntity,
    AssociationStateService,
    AssociationUtilService,
    EntityQuantity,
    EntityQuantityEnum,
    EntityQuantityStateService,
    EntityQuantityUtilService,
} from '@zsport/api';

import * as associationActions from './association.actions';

@Injectable()
export class AssociationEffects {
    public addAssociation = createEffect(() =>
        this.actions$.pipe(
            ofType(associationActions.addAssociation),
            withLatestFrom(this.entityQuantityStateService.selectEntityById$(EntityQuantityEnum.SPORT_ASSOCIATION)),
            switchMap(([action, entityQuantity]) =>
                this.associationDataService
                    .add$(this.associationUtilService.convertEntityToModel(action.association, true))
                    .pipe(
                        tap((association) => {
                            entityQuantity =
                                entityQuantity ||
                                this.entityQuantityUtilService.createEntityQuantity(
                                    EntityQuantityEnum.SPORT_ASSOCIATION
                                );

                            this.entityQuantityStateService.dispatchUpdateEntityAction(
                                this.associationUtilService.updateEntityQuantity(
                                    entityQuantity as EntityQuantity,
                                    association as Association
                                )
                            );
                        }),
                        map((association) => {
                            return associationActions.addAssociationSuccess({
                                association: this.associationUtilService.convertModelToEntity(
                                    association
                                ) as AssociationEntity,
                            });
                        })
                    )
            )
        )
    );
    public listAssociations = createEffect(() =>
        this.actions$.pipe(
            ofType(associationActions.listAssociations),
            withLatestFrom(
                this.associationStateService.selectEntities$(),
                this.entityQuantityStateService.selectEntityById$(EntityQuantityEnum.SPORT_ASSOCIATION)
            ),
            switchMap(([action, entities, entityQuantity]) =>
                entityQuantity && entities && (entityQuantity as EntityQuantity).quantity !== entities.length
                    ? this.associationDataService.list$().pipe(
                          map((associations) => {
                              return associationActions.listAssociationsSuccess({
                                  associations: associations as AssociationEntity[],
                              });
                          })
                      )
                    : of(associationActions.noAction())
            )
        )
    );
    public listAssociationsByCategoryId = createEffect(() =>
        this.actions$.pipe(
            ofType(associationActions.listAssociationsByCategoryId),
            withLatestFrom(this.entityQuantityStateService.selectEntityById$(EntityQuantityEnum.SPORT_ASSOCIATION)),
            switchMap(([action, entityQuantity]) =>
                this.associationStateService.selectAssociationsByCategoryId$(action.categoryId).pipe(
                    switchMap((entities) =>
                        entityQuantity &&
                        entities &&
                        (entityQuantity as EntityQuantity).groups[action.categoryId] !== entities.length
                            ? this.associationDataService.listAssociationsByCategoryId(action.categoryId).pipe(
                                  map((associationModels) => {
                                      return associationActions.listAssociationsByCategoryIdSuccess({
                                          associations: associationModels.map(
                                              (associationModel) =>
                                                  this.associationUtilService.convertModelToEntity(
                                                      associationModel
                                                  ) as AssociationEntity
                                          ),
                                      });
                                  })
                              )
                            : of(associationActions.noAction())
                    )
                )
            )
        )
    );
    public loadAssociation = createEffect(() =>
        this.actions$.pipe(
            ofType(associationActions.loadAssociation),
            switchMap((action) =>
                this.associationDataService.load$(action.uid).pipe(
                    map((association) => {
                        return associationActions.loadAssociationSuccess({
                            association: this.associationUtilService.convertModelToEntity(
                                association
                            ) as AssociationEntity,
                        });
                    }),
                    catchError((error) => {
                        return of(associationActions.loadAssociationFail(error));
                    })
                )
            )
        )
    );
    public updateAssociation = createEffect(() =>
        this.actions$.pipe(
            ofType(associationActions.updateAssociation),
            switchMap((action) =>
                this.associationDataService
                    .update$(this.associationUtilService.convertEntityToModel(action.association, true))
                    .pipe(
                        map((association) => {
                            return associationActions.updateAssociationSuccess({
                                association: {
                                    id: association.uid || '',
                                    changes: this.associationUtilService.convertModelToEntity(association),
                                },
                            });
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private associationDataService: AssociationDataService,
        private associationStateService: AssociationStateService,
        private associationUtilService: AssociationUtilService,
        private entityQuantityStateService: EntityQuantityStateService,
        private entityQuantityUtilService: EntityQuantityUtilService
    ) {}
}
