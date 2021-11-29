import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, EventEntity } from '@zsport/api';

@Injectable()
export abstract class EventTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<EventEntity[]>;
    public abstract getTableComponent(): any;
}
