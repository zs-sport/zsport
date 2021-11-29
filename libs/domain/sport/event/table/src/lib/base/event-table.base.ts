import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, EventEntity } from '@zsport/api';

export abstract class EventTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<EventEntity[]>;
}
