import { Observable } from 'rxjs';

import { EntityDataService } from '../base/entity';
import { LocationModel } from './';

export abstract class LocationDataService extends EntityDataService {
    public abstract listLocationsByCountryId$(countryId: string): Observable<LocationModel[]>;
}
