import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { EntityStateService } from '../base/entity';
import { LocationEntity } from '.';

@Injectable()
export abstract class LocationStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListLocationsByCountryId$(countryId: string): void;
    public abstract selectLocationsByCountryId$(countryId: string): Observable<LocationEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
