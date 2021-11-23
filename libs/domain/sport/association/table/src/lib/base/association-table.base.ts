import { Observable } from 'rxjs';

import { AssociationEntity, DynamicTableConfigModel, EntityBaseComponent } from '@zsport/api';

export abstract class AssociationTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<AssociationEntity[]>;
}
