import { Observable } from 'rxjs';

import { BaseService, EventEntity } from '@zsport/api';

export abstract class EventCompetitionFormFactory extends BaseService {
    public abstract createDynamicComponent(): any;
    public abstract getEntity$(): Observable<EventEntity>;
}
