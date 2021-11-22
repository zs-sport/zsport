import { Observable } from 'rxjs';

import { EntityDataService } from '../../base';
import { EventTeam } from './event-team';
import { Event } from './event';

export abstract class EventDataService extends EntityDataService {
    public abstract listByDay$(day: Date): Observable<Event[]>;
    public abstract listEventTeamsByEventId(eventId: string): Observable<EventTeam[]>;
    public abstract updateEventTeamByEventId(eventTeam: EventTeam, eventId: string): Observable<EventTeam>;
}
