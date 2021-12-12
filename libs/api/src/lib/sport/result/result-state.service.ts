import { Observable } from 'rxjs';

import { EntityStateService } from '../../base';
import { ResultEntity } from './result.entity';

export abstract class ResultStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListResultsByEventIdAction(eventId: string): void;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
    public abstract selectResultsByEventId$(eventId: string): Observable<ResultEntity[]>;
}
