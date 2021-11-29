import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EventDataService, EventEntity, EventUtilService } from '@zsport/api';

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
    public listEventesByDay = createEffect(() =>
        this.actions$.pipe(
            ofType(eventActions.listEventsByDay),
            switchMap((action) =>
                this.eventDataService.listByDay$(action.day).pipe(
                    map((eventModels) => {
                        return eventActions.listEventsByDaySuccess({
                            eventes: eventModels.map(
                                (eventModel) => this.eventUtilService.convertModelToEntity(eventModel) as EventEntity
                            ),
                        });
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

    public constructor(
        private actions$: Actions,
        private eventDataService: EventDataService,
        private eventUtilService: EventUtilService
    ) {}
}
