import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, UserEntity } from '@zsport/api';

@Injectable()
export abstract class UserTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<UserEntity[]>;
    public abstract getTableComponent(): any;
}
