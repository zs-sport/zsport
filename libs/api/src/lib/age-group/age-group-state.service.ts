import { Observable } from 'rxjs';

import { EntityStateService } from '../base';

export abstract class AgeGroupStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
