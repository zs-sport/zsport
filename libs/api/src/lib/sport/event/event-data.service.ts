import { Observable } from 'rxjs';

import { EntityDataService } from '../../base';
import { ResultModel } from '../result';
import { Event } from './event';
import { EventTeam } from './event-team';
import { EventModel } from './event.model';

export abstract class EventDataService extends EntityDataService {
    public abstract addResultByEventId(resultModel: ResultModel, eventId: string): Observable<ResultModel>;
    public abstract listByCompetitionId$(competitionId: string): Observable<EventModel[]>;
    public abstract listByDay$(day: Date): Observable<Event[]>;
    public abstract listEventTeamsByEventId(eventId: string): Observable<EventTeam[]>;
    public abstract listResultsByEventId(eventId: string): Observable<ResultModel[]>;
    public abstract updateEventTeamByEventId(eventTeam: EventTeam, eventId: string): Observable<EventTeam>;
    public abstract updateResultByEventId(result: ResultModel, eventId: string): Observable<ResultModel>;
}
