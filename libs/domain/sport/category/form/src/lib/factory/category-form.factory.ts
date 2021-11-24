import { Observable } from 'rxjs';

import { BaseComponent, Entity } from '@zsport/api';

export abstract class CategoryFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(uid: string): Observable<Entity | undefined>;
}
