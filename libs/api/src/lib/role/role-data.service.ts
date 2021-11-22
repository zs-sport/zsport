import { Observable } from 'rxjs';

import { EntityDataService } from '../base';
import { RoleModel } from './role.model';

export abstract class RoleDataService extends EntityDataService {
    public abstract listByIds$(ids: string[]): Observable<RoleModel[]>;
}
