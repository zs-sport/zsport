import { Observable } from 'rxjs';

import { BaseService, CompetitionEntity } from '@zsport/api';

export abstract class CompetitionFormFactory extends BaseService {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<CompetitionEntity>;
}
