import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, TeamEntity } from '@zsport/api';

export abstract class TeamTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<TeamEntity[]>;
}
