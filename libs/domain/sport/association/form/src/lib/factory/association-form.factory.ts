import { Observable } from 'rxjs';

import { AssociationEntity, BaseComponent } from '@zsport/api';

export abstract class AssociationFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<AssociationEntity>;
}
