import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AssociationDataService, AssociationEntity, AssociationUtilService } from '@zsport/api';

import * as associationActions from './association.actions';
import { of } from 'rxjs';

@Injectable()
export class AssociationEffects {
    public addAssociation = createEffect(() =>
        this.actions$.pipe(
            ofType(associationActions.addAssociation),
            switchMap((action) =>
                this.associationDataService
                    .add$(this.associationUtilService.convertEntityToModel(action.association, true))
                    .pipe(
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
            switchMap((action) =>
                this.associationDataService.list$().pipe(
                    map((associations) => {
                        return associationActions.listAssociationsSuccess({
                            associations: associations as AssociationEntity[],
                        });
                    })
                )
            )
        )
    );
    public listAssociationsByCategoryId = createEffect(() =>
        this.actions$.pipe(
            ofType(associationActions.listAssociationsByCategoryId),
            switchMap((action) =>
                this.associationDataService.listAssociationsByCategoryId(action.categoryId).pipe(
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
        private associationUtilService: AssociationUtilService
    ) {}
}
