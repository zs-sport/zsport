import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    EventDataService,
    EventEntity,
    EventUtilService,
    ResultEntity,
    ResultModel,
    ResultUtilService,
} from '@zsport/api';

import * as eventActions from './event.actions';

@Injectable()
export class EventEffects {
    public addEvent = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.addEvent),
            switchMap((action) =>
                this.eventDataService.add$(this.eventUtilService.convertEntityToModel(action.event, false)).pipe(
                    map((eventModel) => {
                        return eventActions.addEventSuccess({
                            event: this.eventUtilService.convertModelToEntity(eventModel) as EventEntity,
                        });
                    })
                )
            )
        )
    );
    public addResultByEventId = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.addResultByEventId),
            switchMap((action) =>
                this.eventDataService
                    .addResultByEventId(
                        this.resultUtilService.convertEntityToModel(action.result, false) as ResultModel,
                        action.eventId
                    )
                    .pipe(
                        map((result) => {
                            return eventActions.addResultByEventIdSuccess({
                                result: this.resultUtilService.convertModelToEntity(result) as ResultEntity,
                                eventId: action.eventId,
                            });
                        }),
                        catchError((error) => {
                            return of(error);
                        })
                    )
            )
        )
    );
    public listEvents = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.listEvents),
            switchMap((action) =>
                this.eventDataService.list$().pipe(
                    map((eventModels) => {
                        return eventActions.listEventsSuccess({
                            events: eventModels.map(
                                (eventModel) => this.eventUtilService.convertModelToEntity(eventModel) as EventEntity
                            ),
                        });
                    })
                )
            )
        )
    );
    public listEventsByDay = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.listEventsByDay),
            switchMap((action) =>
                this.eventDataService.listByDay$(action.day).pipe(
                    map((eventModels) => {
                        return eventActions.listEventsByDaySuccess({
                            events: eventModels.map(
                                (eventModel) => this.eventUtilService.convertModelToEntity(eventModel) as EventEntity
                            ),
                        });
                    })
                )
            )
        )
    );
    public listResultsByEventId = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.listResultsByEventId),
            mergeMap((action) =>
                this.eventDataService.listResultsByEventId(action.eventId).pipe(
                    map((results) => {
                        return eventActions.listResultsByEventIdSuccess({
                            results,
                            eventId: action.eventId,
                        });
                    })
                )
            )
        )
    );
    public loadEvent = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.loadEvent),
            switchMap((action) =>
                this.eventDataService.load$(action.uid).pipe(
                    map((eventModel) => {
                        return eventActions.loadEventSuccess({
                            event: this.eventUtilService.convertModelToEntity(eventModel) as EventEntity,
                        });
                    })
                )
            )
        )
    );
    public updateEvent = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.updateEvent),
            switchMap((action) =>
                this.eventDataService.update$(this.eventUtilService.convertEntityToModel(action.event, false)).pipe(
                    map((eventModel) => {
                        return eventActions.updateEventSuccess({
                            event: {
                                id: eventModel.uid || '',
                                changes: this.eventUtilService.convertModelToEntity(eventModel) as EventEntity,
                            },
                        });
                    })
                )
            )
        )
    );
    public updateResultByEventId = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.updateResultByEventId),
            switchMap((action) =>
                this.eventDataService
                    .updateResultByEventId(
                        this.resultUtilService.convertEntityToModel(action.result, false) as ResultModel,
                        action.eventId
                    )
                    .pipe(
                        map((result) => {
                            return eventActions.updateResultByEventIdSuccess({
                                result: this.resultUtilService.convertModelToEntity(result) as ResultEntity,
                                eventId: action.eventId,
                            });
                        })
                    )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private eventDataService: EventDataService,
        private eventUtilService: EventUtilService,
        private resultUtilService: ResultUtilService
    ) {}
}
