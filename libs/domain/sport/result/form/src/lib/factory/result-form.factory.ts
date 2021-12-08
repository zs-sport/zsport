import { Observable } from 'rxjs';

import { BaseService, Entity } from '@zsport/api';

export abstract class ResultFormFactory extends BaseService {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<Entity | undefined>;
}
