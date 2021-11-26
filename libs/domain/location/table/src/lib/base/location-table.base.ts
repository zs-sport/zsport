import { Observable } from 'rxjs';

import { DynamicTableConfigModel, EntityBaseComponent, LocationEntity } from '@zsport/api';

export abstract class LocationTableBase extends EntityBaseComponent {
    public config$!: Observable<DynamicTableConfigModel>;
    public data$!: Observable<LocationEntity[]>;
}
