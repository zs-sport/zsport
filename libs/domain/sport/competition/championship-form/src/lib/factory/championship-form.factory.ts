import { Observable } from 'rxjs';

import { BaseService, Championship } from '@zsport/api';

export abstract class ChampionshipFormFactory extends BaseService {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<Championship>;
}
