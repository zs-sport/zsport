import { Observable } from 'rxjs';

import { BaseService, Round } from '@zsport/api';

export abstract class RoundFormFactory extends BaseService {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<Round>;
}
