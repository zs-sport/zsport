import { Observable } from 'rxjs';

import { EntityStateService } from '../base';

export abstract class RoleStateService extends EntityStateService {
    public constructor() {
        super();
    }

    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
