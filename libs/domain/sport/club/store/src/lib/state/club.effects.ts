import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ClubDataService, ClubEntity, ClubModel, ClubUtilService } from '@zsport/api';

import * as clubActions from './club.actions';

@Injectable()
export class ClubEffects {
    public addClub = createEffect(() =>
        this.actions$.pipe(
            ofType(clubActions.addClub),
            switchMap((action) =>
                this.clubDataService.add$(this.clubUtilService.convertEntityToModel(action.club, false)).pipe(
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
            switchMap(() =>
                this.clubDataService.list$().pipe(
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
            switchMap((action) =>
                this.clubDataService.listClubsByCategoryId(action.categoryId).pipe(
                    map((clubModels) => {
                        return clubActions.listClubsByCategoryIdSuccess({
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
        private clubUtilService: ClubUtilService
    ) {}
}
