import { forkJoin, Observable, of } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    ClubDataService,
    EventDataService,
    EventTeam,
    TeamDataService,
    TeamEntity,
    TeamModel,
    TeamUtilService,
} from '@zsport/api';

import * as teamActions from './team.actions';

@Injectable()
export class TeamEffects {
    public addTeam = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.addTeam),
            switchMap((action) =>
                this.teamDataService.add$(this.teamUtilService.convertEntityToModel(action.team, false)).pipe(
                    map((team) => {
                        return teamActions.addTeamSuccess({
                            team: team as TeamEntity,
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
    public addTeamByClubId = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.addTeamByClubId),
            switchMap((action) =>
                this.clubDataService
                    .addTeamByClubId(
                        this.teamUtilService.convertEntityToModel(action.team, false) as TeamModel,
                        action.clubId
                    )
                    .pipe(
                        map((team) => {
                            return teamActions.addTeamByClubIdSuccess({
                                team: this.teamUtilService.convertModelToEntity(team) as TeamEntity,
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
    /* public listEventTeamsByEventId = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.listEventTeamsByEventId),
            switchMap((action) =>
                this.eventDataService.listEventTeamsByEventId(action.eventId).pipe(
                    map((eventTeams) => {
                        return teamActions.listEventTeamsByEventIdSuccess({
                            eventTeams: eventTeams.map((eventTeam) => eventTeam),
                        });
                    })
                )
            )
        )
    ); */
    public listTeams = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.listTeams),
            switchMap(() =>
                this.teamDataService.list$().pipe(
                    map((teams) => {
                        return teamActions.listTeamsSuccess({
                            teams: teams as TeamEntity[],
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
    public listTeamsByAGGCId = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.listTeamsByAGGCId),
            switchMap((action) =>
                this.teamDataService.listTeamsByAGGCId(action.aggcId).pipe(
                    map((teamModels) => {
                        return teamActions.listTeamsByAGGCIdSuccess({
                            teams: teamModels.map(
                                (teamModel) => this.teamUtilService.convertModelToEntity(teamModel) as TeamEntity
                            ),
                        });
                    }),
                    catchError((error) => {
                        console.log(error);

                        return of(teamActions.listTeamsByAGGCIdFail({ error }));
                    })
                )
            )
        )
    );
    public listTeamsByAGGCIdAndClubIds = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.listTeamsByAGGCIdAndClubIds),
            switchMap((action) => {
                const teamObservables: Observable<TeamModel[]>[] = [];

                action.sportClubIds.forEach((clubId) => {
                    teamObservables.push(
                        this.teamDataService.listTeamByAGGCIdAndClubId(action.aggcId, clubId).pipe(first())
                    );
                });

                return forkJoin([...teamObservables]).pipe(
                    map((teams) => {
                        const newTeams: TeamEntity[] = teams.map(
                            (team) => this.teamUtilService.convertModelToEntity(team[0]) as TeamEntity
                        );

                        return teamActions.listTeamsByAGGCIdAndClubIdsSuccess({ teams: newTeams });
                    }),
                    catchError((error) => {
                        console.log(error);

                        return of(error);
                    })
                );
            })
        )
    );
    public listTeamsByClubId = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.listTeamsByClubId),
            switchMap((action) =>
                this.clubDataService.listTeamsByClubId(action.clubId).pipe(
                    map((teams) => {
                        return teamActions.listTeamsByClubIdSuccess({
                            teams: teams.map((team) => this.teamUtilService.convertModelToEntity(team) as TeamEntity),
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
    public loadTeam = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.loadTeam),
            switchMap((action) =>
                this.teamDataService.load$(action.uid).pipe(
                    map((team) => {
                        return teamActions.loadTeamSuccess({
                            team: team as TeamEntity,
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
    /* public updateEventTeamByEventId = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.updateEventTeamByEventId),
            switchMap((action) =>
                this.eventDataService.updateEventTeamByEventId(action.eventTeam, action.eventId).pipe(
                    map((eventTeam) => {
                        return teamActions.updateEventTeamByEventIdSuccess({
                            eventTeam: {
                                id: eventTeam.uid || '',
                                changes: eventTeam,
                            },
                        });
                    })
                )
            )
        )
    ); */
    public updateTeam = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.updateTeam),
            switchMap((action) =>
                this.teamDataService.update$(this.teamUtilService.convertEntityToModel(action.team, false)).pipe(
                    map((team) => {
                        return teamActions.updateTeamSuccess({
                            team: { id: team.uid || '', changes: team as TeamEntity },
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
    public updateTeamByClubId = createEffect(() =>
        this.actions$.pipe(
            ofType(teamActions.updateTeamByClubId),
            switchMap((action) =>
                this.clubDataService
                    .updateTeamByClubId(
                        this.teamUtilService.convertEntityToModel(action.team, false) as TeamModel,
                        action.clubId
                    )
                    .pipe(
                        map((teamModel) => {
                            return teamActions.updateTeamByClubIdSuccess({
                                team: {
                                    id: teamModel.uid || '',
                                    changes: this.teamUtilService.convertModelToEntity(teamModel),
                                },
                            });
                        }),
                        catchError((error) => {
                            console.log(error);

                            return of(teamActions.updateTeamByClubIdFail({ error }));
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        //private eventDataService: EventDataService,
        private clubDataService: ClubDataService,
        private teamDataService: TeamDataService,
        private teamUtilService: TeamUtilService
    ) {}
}
