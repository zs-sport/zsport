import { Observable } from 'rxjs';

import { EntityStateService } from '../base/entity';

export abstract class LocationStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
