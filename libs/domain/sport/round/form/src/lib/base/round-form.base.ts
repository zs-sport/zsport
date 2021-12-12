import { Observable } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { BaseService, Event, EventEntity, Round } from '@zsport/api';

export abstract class RoundFormBase extends BaseService {
    public addEvent!: EventEmitter<number>;
    public editEvent!: EventEmitter<EventEntity>;
    public eventNumber!: number;
    public events$!: Observable<EventEntity[]>;
    public round!: Round;

    public abstract addEventClickHandler(index: number): void;
    public abstract editEventClickHandler(event: Event): void;
}
