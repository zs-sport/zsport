import { Observable } from 'rxjs';

import { BaseComponent, PersonEntity } from '@zsport/api';

export abstract class PersonFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<PersonEntity>;
}
