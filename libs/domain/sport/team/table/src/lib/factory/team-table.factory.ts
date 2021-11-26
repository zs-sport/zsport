import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, TeamEntity } from '@zsport/api';

@Injectable()
export abstract class TeamTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<TeamEntity[]>;
    public abstract getTableComponent(): any;
}
