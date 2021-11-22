import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, RoleEntity } from '@zsport/api';

export abstract class RoleTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<RoleEntity[]>;
}
