import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, RoleEntity } from '@zsport/api';

@Injectable()
export abstract class RoleTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<RoleEntity[]>;
    public abstract getTableComponent(): any;
}
