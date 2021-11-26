import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { DynamicTableFactory, LocationEntity } from '@zsport/api';

@Injectable()
export abstract class LocationTableFactory extends DynamicTableFactory {
    public abstract getData$(): Observable<LocationEntity[]>;
    public abstract getTableComponent(): any;
}
