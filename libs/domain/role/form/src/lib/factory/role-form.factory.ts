import { Observable } from 'rxjs';

import { BaseComponent, Entity } from '@zsport/api';

export abstract class RoleFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<Entity | undefined>;
}
