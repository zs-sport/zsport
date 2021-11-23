import { Observable } from 'rxjs';

import { AssociationEntity, EntityBaseComponent } from '@zsport/api';

export abstract class AssociationFormBase extends EntityBaseComponent {
    public sportAssociation$!: Observable<AssociationEntity>;

    public constructor() {
        super();
    }
}
