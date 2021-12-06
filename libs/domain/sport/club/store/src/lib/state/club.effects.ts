import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    Club,
    ClubDataService,
    ClubEntity,
    ClubModel,
    ClubStateService,
    ClubUtilService,
    EntityQuantity,
    EntityQuantityEnum,
    EntityQuantityStateService,
    EntityQuantityUtilService,
} from '@zsport/api';

import * as clubActions from './club.actions';

@Injectable()
export class ClubEffects {
    public addClub = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.addClub),
            withLatestFrom(this.entityQuantityStateService.selectEntityById$(EntityQuantityEnum.SPORT_CLUB)),
            switchMap(([action, entityQuantity]) =>
                this.clubDataService.add$(this.clubUtilService.convertEntityToModel(action.club, false)).pipe(
                    tap((club) => {
                        entityQuantity =
                            entityQuantity ||
                            this.entityQuantityUtilService.createEntityQuantity(EntityQuantityEnum.SPORT_CLUB);

                        this.entityQuantityStateService.dispatchUpdateEntityAction(
                            this.clubUtilService.updateEntityQuantity(entityQuantity as EntityQuantity, club as Club)
                        );
                    }),
                    map((club) => {
                        return clubActions.addClubSuccess({
                            club: this.clubUtilService.convertModelToEntity(club as ClubModel) as ClubEntity,
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
    public listClubs = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.listClubs),
            withLatestFrom(
                this.clubStateService.selectEntities$(),
                this.entityQuantityStateService.selectEntityById$(EntityQuantityEnum.SPORT_CLUB)
            ),
            switchMap(([action, entities, entityQuantity]) =>
                entityQuantity && entities && (entityQuantity as EntityQuantity).quantity !== entities.length
                    ? this.clubDataService.list$().pipe(
                          map((clubs) => {
                              return clubActions.listClubsSuccess({
                                  clubs: clubs as ClubEntity[],
                              });
                          }),
                          catchError((error) => {
                              console.log(error);

                              return of(error);
                          })
                      )
                    : of(clubActions.noAction)
            )
        )
    );
    public listClubsByAssociationCategoryIdGenderIdAgeGroupId = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.listClubsByAssociationIdCategoryIdGenderIdAgeGroupId),
            switchMap((action) =>
                this.clubDataService
                    .listClubsByAssociationIdCategoryIdGenderIdAgeGroupId(
                        action.associationId,
                        action.categoryId,
                        action.genderId,
                        action.ageGroupId
                    )
                    .pipe(
                        map((clubModels) => {
                            return clubActions.listClubsByAssociationIdCategoryIdGenderIdAgeGroupIdSuccess({
                                clubs: clubModels.map(
                                    (clubModel) => this.clubUtilService.convertModelToEntity(clubModel) as ClubEntity
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
    public listClubsByCategoryId = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.listClubsByCategoryId),
            withLatestFrom(this.entityQuantityStateService.selectEntityById$(EntityQuantityEnum.SPORT_ASSOCIATION)),
            switchMap(([action, entityQuantity]) =>
                this.clubStateService.selectClubsByCategoryId$(action.categoryId).pipe(
                    switchMap((entities) =>
                        entityQuantity &&
                        entities &&
                        (entityQuantity as EntityQuantity).groups[action.categoryId].quantity !== entities.length
                            ? this.clubDataService.listClubsByCategoryId(action.categoryId).pipe(
                                  map((clubModels) => {
                                      return clubActions.listClubsByCategoryIdSuccess({
                                          clubs: clubModels.map(
                                              (clubModel) =>
                                                  this.clubUtilService.convertModelToEntity(clubModel) as ClubEntity
                                          ),
                                      });
                                  }),
                                  catchError((error) => {
                                      return of(error);
                                  })
                              )
                            : of(clubActions.noAction)
                    )
                )
            )
        )
    );
    public listPlayersByClubId = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.listPlayersByClubId),
            mergeMap((action) =>
                this.clubDataService.listPlayersByClubId(action.clubId).pipe(
                    map((players) => {
                        return clubActions.listPlayersByClubIdSuccess({
                            players,
                            clubId: action.clubId,
                        });
                    })
                )
            )
        )
    );
    public loadClub = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.loadClub),
            switchMap((action) =>
                this.clubDataService.load$(action.uid).pipe(
                    map((club) => {
                        return clubActions.loadClubSuccess({
                            club: this.clubUtilService.convertModelToEntity(club as ClubModel) as ClubEntity,
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
    public updateClub = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.updateClub),
            switchMap((action) =>
                this.clubDataService.update$(this.clubUtilService.convertEntityToModel(action.club, false)).pipe(
                    map((club) => {
                        return clubActions.updateClubSuccess({
                            club: { id: club.uid || '', changes: club as ClubModel },
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

    public constructor(
        private actions$: Actions,
        private clubDataService: ClubDataService,
        private clubStateService: ClubStateService,
        private clubUtilService: ClubUtilService,
        private entityQuantityStateService: EntityQuantityStateService,
        private entityQuantityUtilService: EntityQuantityUtilService
    ) {}
}
