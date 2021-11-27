import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, PersonEntity } from '@zsport/api';

@Injectable()
export abstract class PersonTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<PersonEntity[]>;
    public abstract getTableComponent(): any;
}
