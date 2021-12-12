import { Observable } from 'rxjs';
import { ResultModel } from '.';
import { EntityDataService } from '../../base';

export abstract class ResultDataService extends EntityDataService {
    public abstract listResultsByEventId(eventId: string): Observable<ResultModel[]>;
}
