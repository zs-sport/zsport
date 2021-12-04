import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { KeyValue } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import { Event, EventEntity, Group, GroupLevel } from '@zsport/api';

import { GroupFormBase } from '../base';

@Injectable()
export class GroupFormService extends GroupFormBase {
    private events!: Event[];
    private eventsNumber!: number;
    private groupLevel!: GroupLevel;

    public addEventClickHandler(index: number, title: string): void {
        this.addEvent.next({ key: index, value: title });
    }

    public editEventClickHandler(event: EventEntity): void {
        this.editEvent.next(event);
    }

    public init$(
        groupLevel: GroupLevel,
        eventsNumber: number,
        addEvent: EventEmitter<KeyValue<number, string>>,
        editEvent: EventEmitter<EventEntity>
    ): Observable<boolean> {
        this.groupLevel = groupLevel;
        this.eventsNumber = eventsNumber;
        this.addEvent = addEvent;
        this.editEvent = editEvent;

        return of(true);
    }
}
