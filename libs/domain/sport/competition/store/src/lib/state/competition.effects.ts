import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompetitionDataService, CompetitionEntity, EventEntity, EventStateService } from '@zsport/api';

import * as competitionActions from './competition.actions';

@Injectable()
export class CompetitionEffects {
    public addCompetition = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.addCompetition),
            switchMap((action) =>
                this.competitionDataService.add$(action.competition).pipe(
                    map((competition) => {
                        return competitionActions.addCompetitionSuccess({
                            competition: competition as CompetitionEntity,
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
                this.competitionDataService.addEventByCompetitionId(action.event).pipe(
                    map((event) => {
                        return competitionActions.addEventByCompetitionIdSuccess({
                            event: event as EventEntity,
                        });
                    })
                )
            )
        )
    );
    public listEventesByCompetitionId = createEffect(
        () =>
            this.actions$.pipe(
                ofType(competitionActions.listEventesByCompetitionId),
                mergeMap((action) =>
                    this.competitionDataService.listEventsByCompetitionId(action.competitionId).pipe(
                        tap((eventes) => {
                            this.eventStateService.dispatchListEventsByCompetitionIdSuccess(eventes as EventEntity[]);
                        })
                    )
                )
            ),
        { dispatch: false }
    );
    public loadCompetitions = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.loadCompetitions),
            switchMap((action) =>
                this.competitionDataService.list$().pipe(
                    map((competitions) => {
                        return competitionActions.loadCompetitionsSuccess({
                            competitions: competitions as CompetitionEntity[],
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
                this.competitionDataService.update$(action.competition).pipe(
                    map((competition) => {
                        return competitionActions.updateCompetitionSuccess({
                            competition: { id: competition.uid || '', changes: competition },
                        });
                    })
                )
            )
        )
    );
    public updateEventBy = createEffect(() =>
        this.actions$.pipe(
            ofType(competitionActions.updateEvent),
            switchMap((action) =>
                this.competitionDataService.updateEventByCompetitionId(action.event).pipe(
                    map((event) => {
                        return competitionActions.updateEventSuccess({
                            event: event as EventEntity,
                        });
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private competitionDataService: CompetitionDataService,
        private eventStateService: EventStateService
    ) {}
}
