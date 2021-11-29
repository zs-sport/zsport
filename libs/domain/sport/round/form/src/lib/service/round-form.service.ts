import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EventEmitter, Injectable } from '@angular/core';
import { EventEntity, Round } from '@zsport/api';

import { RoundFormBase } from '../base';

@Injectable()
export class RoundFormService extends RoundFormBase {
    public addEventClickHandler(index: number): void {
        this.addEvent.next(index);
    }

    public editEventClickHandler(event: EventEntity): void {
        this.editEvent.next(event);
    }

    public init$(
        round: Round,
        eventes$: Observable<EventEntity[]>,
        eventNumber: number,
        addEvent: EventEmitter<number>,
        editEvent: EventEmitter<EventEntity>
    ): Observable<boolean> {
        this.round = round;
        this.events$ = eventes$;
        this.eventNumber = eventNumber;
        this.addEvent = addEvent;
        this.editEvent = editEvent;

        return this.events$.pipe(
            switchMap((eventes) => {
                return of(true);
            })
        );
    }
}
