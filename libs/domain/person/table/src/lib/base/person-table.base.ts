import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, PersonEntity } from '@zsport/api';

export abstract class PersonTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<PersonEntity[]>;
}
