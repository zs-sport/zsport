import { KeyValue } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { BaseService, Event } from '@zsport/api';

export abstract class GroupFormBase extends BaseService {
    public addEvent!: EventEmitter<KeyValue<number, string>>;
    public editEvent!: EventEmitter<Event>;

    public abstract addEventClickHandler(index: number, title: string): void;
    public abstract editEventClickHandler(event: Event): void;
}
