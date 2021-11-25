import { Observable } from 'rxjs';

import { ClubEntity, DynamicTableConfigModel, EntityBaseComponent } from '@zsport/api';

export abstract class ClubTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<ClubEntity[]>;
}
