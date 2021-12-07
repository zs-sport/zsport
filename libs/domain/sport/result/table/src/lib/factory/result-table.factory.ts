import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, Result } from '@zsport/api';

@Injectable()
export abstract class ResultTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<Result[]>;
    public abstract getTableComponent(): any;
}
