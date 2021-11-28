import { forkJoin, Observable, of } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    ClubDataService,
    EventPlayer,
    PlayerDataService,
    PlayerEntity,
    PlayerModel,
    PlayerUtilService,
} from '@zsport/api';

import * as playerActions from './player.actions';

@Injectable()
export class PlayerEffects {
    public addPlayer = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.addPlayer),
            switchMap((action) =>
                this.playerDataService.add$(this.playerUtilService.convertEntityToModel(action.player, false)).pipe(
                    map((player) => {
                        return playerActions.addPlayerSuccess({
                            player: { ...(player as PlayerModel) },
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
    public addPlayerByClubId = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.addPlayerByClubId),
            switchMap((action) =>
                this.clubDataService
                    .addPlayerByClubId(
                        this.playerUtilService.convertEntityToModel(action.player, false) as PlayerModel,
                        action.clubId
                    )
                    .pipe(
                        map((player) => {
                            return playerActions.addPlayerByClubIdSuccess({
                                player: this.playerUtilService.convertModelToEntity(player) as PlayerEntity,
                                clubId: action.clubId,
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
    public listEventPlayersByEventId = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.listEventPlayersByEventId),
            switchMap((action) =>
                this.playerDataService.listEventPlayersByEventId(action.eventId).pipe(
                    map((eventPlayers) => {
                        return playerActions.listEventPlayersByEventIdSuccess({
                            eventPlayers: eventPlayers as EventPlayer[],
                        });
                    })
                )
            )
        )
    );
    public listPlayers = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.listPlayers),
            switchMap(() =>
                this.playerDataService.list$().pipe(
                    map((players) => {
                        return playerActions.listPlayersSuccess({
                            players: players as PlayerEntity[],
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
    public listPlayersByAGGCId = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.listPlayersByAGGCId),
            switchMap((action) =>
                this.playerDataService.listPlayersByAGGCId(action.aggcId).pipe(
                    map((playerModels) => {
                        return playerActions.listPlayersByAGGCIdSuccess({
                            players: playerModels.map(
                                (playerModel) =>
                                    this.playerUtilService.convertModelToEntity(playerModel) as PlayerEntity
                            ),
                        });
                    }),
                    catchError((error) => {
                        console.log(error);

                        return of(playerActions.listPlayersByAGGCIdFail({ error }));
                    })
                )
            )
        )
    );
    public listPlayersByAGGCIdAndClubIds = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.listPlayersByAGGCIdAndClubIds),
            switchMap((action) => {
                const playerObservables: Observable<PlayerModel[]>[] = [];

                action.sportClubIds.forEach((clubId) => {
                    playerObservables.push(
                        this.playerDataService.listPlayerByAGGCIdAndClubId(action.aggcId, clubId).pipe(first())
                    );
                });

                return forkJoin([...playerObservables]).pipe(
                    map((players) => {
                        const newPlayers: PlayerEntity[] = players.map(
                            (player) => this.playerUtilService.convertModelToEntity(player[0]) as PlayerEntity
                        );

                        return playerActions.listPlayersByAGGCIdAndClubIdsSuccess({ players: newPlayers });
                    }),
                    catchError((error) => {
                        console.log(error);

                        return of(error);
                    })
                );
            })
        )
    );
    public listPlayersByClubId = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.listPlayersByClubId),
            switchMap((action) =>
                this.clubDataService.listPlayersByClubId(action.clubId).pipe(
                    map((players) => {
                        return playerActions.listPlayersByClubIdSuccess({
                            players: players.map(
                                (player) => this.playerUtilService.convertModelToEntity(player) as PlayerEntity
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
    public loadPlayer = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.loadPlayer),
            switchMap((action) =>
                this.playerDataService.load$(action.uid).pipe(
                    map((player) => {
                        return playerActions.loadPlayerSuccess({
                            player: { ...(player as PlayerModel) },
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
    public updatePlayer = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.updatePlayer),
            switchMap((action) =>
                this.playerDataService.update$(this.playerUtilService.convertEntityToModel(action.player, false)).pipe(
                    map((player) => {
                        return playerActions.updatePlayerSuccess({
                            player: { id: player.uid || '', changes: player as PlayerEntity },
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
    public updatePlayerByClubId = createEffect(() =>
        this.actions$.pipe(
            ofType(playerActions.updatePlayerByClubId),
            switchMap((action) =>
                this.clubDataService
                    .updatePlayerByClubId(
                        this.playerUtilService.convertEntityToModel(action.player, false) as PlayerModel,
                        action.clubId
                    )
                    .pipe(
                        map((playerModel) => {
                            return playerActions.updatePlayerByClubIdSuccess({
                                player: {
                                    id: playerModel.uid || '',
                                    changes: this.playerUtilService.convertModelToEntity(playerModel),
                                },
                            });
                        }),
                        catchError((error) => {
                            console.log(error);

                            return of(playerActions.updatePlayerByClubIdFail({ error }));
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private clubDataService: ClubDataService,
        private playerDataService: PlayerDataService,
        private playerUtilService: PlayerUtilService
    ) {}
}
