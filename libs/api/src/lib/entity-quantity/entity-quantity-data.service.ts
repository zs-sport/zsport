import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { EntityDataService } from '../base';
import { EntityQuantityModel } from './entity-quantity.model';

@Injectable()
export abstract class EntityQuantityDataService extends EntityDataService {
    public abstract listByIds$(ids: string[]): Observable<EntityQuantityModel[]>;
    public abstract search$(param: string): Observable<EntityQuantityModel[]>;
}
