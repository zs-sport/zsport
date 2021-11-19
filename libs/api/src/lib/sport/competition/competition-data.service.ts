import { Observable } from 'rxjs';

import { EntityDataService } from '../../base';
import { Event } from '../event';

export abstract class CompetitionDataService extends EntityDataService {
    public abstract addEventByCompetitionId(event: Event): Observable<Event>;
    public abstract listEventsByCompetitionId(competitionId: string): Observable<Event[]>;
    public abstract updateEventByCompetitionId(event: Event): Observable<Event>;
}
