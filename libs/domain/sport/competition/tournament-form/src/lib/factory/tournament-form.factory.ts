import { Observable } from 'rxjs';

import { BaseService, Tournament } from '@zsport/api';

export abstract class TournamentFormFactory extends BaseService {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<Tournament>;
}
