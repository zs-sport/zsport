import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, UserEntity } from '@zsport/api';

export abstract class UserTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<UserEntity[]>;
}
