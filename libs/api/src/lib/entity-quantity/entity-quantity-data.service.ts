import { Observable } from 'rxjs';

import { EntityDataService } from '../base';
import { EntityQuantityModel } from './entity-quantity.model';

export abstract class EntityQuantityDataService extends EntityDataService {
    public constructor() {
        super();
    }

    public abstract listByIds$(ids: string[]): Observable<EntityQuantityModel[]>;

    public abstract search$(param: string): Observable<EntityQuantityModel[]>;
}
