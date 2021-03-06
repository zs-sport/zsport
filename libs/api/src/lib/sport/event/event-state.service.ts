import { Observable } from 'rxjs';

import { EntityStateService } from '../../base';
import { ResultEntity } from '../result';
import { EventEntity } from './event.entity';

export abstract class EventStateService extends EntityStateService {
    public abstract dispatchAddResultByEventIdAction(result: ResultEntity, eventId: string): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListEventsByCompetitionId(competitionId: string): void;
    public abstract dispatchListEventsByCompetitionIdSuccess(events: EventEntity[]): void;
    public abstract dispatchListEventsByDay(day: Date): void;
    public abstract dispatchListResultsByEventId(eventId: string): void;
    public abstract selectEntities$(): Observable<EventEntity[]>;
    public abstract selectEventsByCompetitionId(competitionId: string): Observable<EventEntity[]>;
    public abstract selectEventsByDay$(day: Date): Observable<EventEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
