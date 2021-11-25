import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ClubEntity, DynamicTableFactory } from '@zsport/api';

@Injectable()
export abstract class ClubTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<ClubEntity[]>;
    public abstract getTableComponent(): any;
}
