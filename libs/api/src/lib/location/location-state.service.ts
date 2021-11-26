import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { EntityStateService } from '../base/entity';

@Injectable()
export abstract class LocationStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
