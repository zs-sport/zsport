import { Observable } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { BaseService, Event, Round } from '@zsport/api';

export abstract class RoundFormBase extends BaseService {
    public addEvent!: EventEmitter<number>;
    public editEvent!: EventEmitter<Event>;
    public eventNumber!: number;
    public events$!: Observable<Event[]>;
    public round!: Round;

    public abstract addEventClickHandler(index: number): void;
    public abstract editEventClickHandler(event: Event): void;
}
