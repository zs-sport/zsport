import { Observable } from 'rxjs';

import { EntityBaseComponent, LocationEntity } from '@zsport/api';

export abstract class LocationFormBase extends EntityBaseComponent {
    public location$!: Observable<LocationEntity>;
}
