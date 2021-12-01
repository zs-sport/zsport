import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import {
    Competition,
    CompetitionDataService,
    CompetitionModel,
    CompetitionUtilService,
    Event,
    EventModel,
    EventStateService,
    EventUtilService,
} from '@zsport/api';

import * as competitionActions from './competition.actions';

@Injectable()
export class CompetitionEffects {
    public addCompetition = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.addCompetition),
            switchMap((action) =>
                this.competitionDataService
                    .add$(this.competitionUtilService.convertEntityToModel(action.competition, false))
                    .pipe(
                        map((competitionModel) => {
                            return competitionActions.addCompetitionSuccess({
                                competition: this.competitionUtilService.convertModelToEntity(
                                    competitionModel
                                ) as Competition,
                            });
                        })
                    )
            )
        )
    );
    public addEventByCompetitionId = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.addEventByCompetitionId),
            switchMap((action) =>
                this.competitionDataService
                    .addEventByCompetitionId(
                        this.eventUtilService.convertEntityToModel(action.event, false) as EventModel
                    )
                    .pipe(
                        map((eventModel) => {
                            return competitionActions.addEventByCompetitionIdSuccess({
                                event: this.eventUtilService.convertModelToEntity(eventModel) as Event,
                            });
                        })
                    )
            )
        )
    );
    public listCompetitions = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.listCompetitions),
            switchMap((action) =>
                this.competitionDataService.list$().pipe(
                    map((competitionModels) => {
                        return competitionActions.listCompetitionsSuccess({
                            competitions: competitionModels.map(
                                (competitionModel) =>
                                    this.competitionUtilService.convertModelToEntity(competitionModel) as Competition
                            ),
                        });
                    })
                )
            )
        )
    );
    public listEventsByCompetitionId = createEffect(
        () =>
            this.actions$.pipe(
                ofType(competitionActions.listEventsByCompetitionId),
                mergeMap((action) =>
                    this.competitionDataService.listEventsByCompetitionId(action.competitionId).pipe(
                        tap((events) => {
                            this.eventStateService.dispatchListEventsByCompetitionIdSuccess(
                                events.map(
                                    (eventModel) => this.eventUtilService.convertModelToEntity(eventModel) as Event
                                )
                            );
                        })
                    )
                )
            ),
        { dispatch: false }
    );
    public loadCompetition = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.loadCompetition),
            switchMap((action) =>
                this.competitionDataService.load$(action.uid).pipe(
                    map((competition) => {
                        return competitionActions.loadCompetitionSuccess({
                            competition: competition as CompetitionModel,
                        });
                    })
                )
            )
        )
    );
    public updateCompetition = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.updateCompetition),
            switchMap((action) =>
                this.competitionDataService
                    .update$(this.competitionUtilService.convertEntityToModel(action.competition, false))
                    .pipe(
                        map((competitionModel) => {
                            return competitionActions.updateCompetitionSuccess({
                                competition: {
                                    id: competitionModel.uid || '',
                                    changes: this.competitionUtilService.convertModelToEntity(
                                        competitionModel
                                    ) as CompetitionModel,
                                },
                            });
                        })
                    )
            )
        )
    );
    public updateEventByCompetitionId = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.updateEventByCompetitionId),
            switchMap((action) =>
                this.competitionDataService
                    .updateEventByCompetitionId(
                        this.eventUtilService.convertEntityToModel(action.event, false) as EventModel
                    )
                    .pipe(
                        map((eventModel) => {
                            return competitionActions.updateEventByCompetitionIdSuccess({
                                event: this.eventUtilService.convertModelToEntity(eventModel) as Event,
                            });
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private competitionDataService: CompetitionDataService,
        private competitionUtilService: CompetitionUtilService,
        private eventStateService: EventStateService,
        private eventUtilService: EventUtilService
    ) {}
}
