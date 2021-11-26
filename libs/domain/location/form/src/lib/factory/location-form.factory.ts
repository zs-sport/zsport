import { Observable } from 'rxjs';

import { BaseComponent, LocationEntity } from '@zsport/api';

export abstract class LocationFormFactory extends BaseComponent {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<LocationEntity>;
}
