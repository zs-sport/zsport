import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, PlayerEntity } from '@zsport/api';

@Injectable()
export abstract class PlayerTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<PlayerEntity[]>;
    public abstract getTableComponent(): any;
}
