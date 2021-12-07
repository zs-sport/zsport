import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, Result } from '@zsport/api';

export abstract class ResultTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<Result[]>;
}
