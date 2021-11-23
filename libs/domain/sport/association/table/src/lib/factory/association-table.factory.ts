import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory } from '@zsport/api';

@Injectable()
export abstract class AssociationTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<any[]>;
    public abstract getTableComponent(): any;
}
