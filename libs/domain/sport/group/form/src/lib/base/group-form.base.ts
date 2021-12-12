import { KeyValue } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { BaseService, EventEntity } from '@zsport/api';

export abstract class GroupFormBase extends BaseService {
    public addEvent!: EventEmitter<KeyValue<number, string>>;
    public editEvent!: EventEmitter<EventEntity>;

    public abstract addEventClickHandler(index: number, title: string): void;
    public abstract editEventClickHandler(event: EventEntity): void;
}
