import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, Competition } from '@zsport/api';

export abstract class CompetitionTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<Competition[]>;
}
