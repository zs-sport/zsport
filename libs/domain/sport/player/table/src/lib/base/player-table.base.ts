import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, PlayerEntity } from '@zsport/api';

export abstract class PlayerTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<PlayerEntity[]>;
}
