import { Observable } from 'rxjs';

import { BaseService, Entity } from '@zsport/api';

export abstract class UserFormFactory extends BaseService {
    public abstract createDynamicComponent(): unknown;
    public abstract getEntity$(uid: string): Observable<Entity | undefined>;
}
