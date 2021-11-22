import { Observable } from 'rxjs';

import { EntityStateService } from '../../base';
import { EventEntity } from './event.entity';

export abstract class EventStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListEventsByCompetitionIdSuccess(events: EventEntity[]): void;
    public abstract dispatchListEventsByDay(day: Date): void;
    public abstract selectEntities$(): Observable<EventEntity[]>;
    public abstract selectEventsByCompetitionId(competitionId: string): Observable<EventEntity[]>;
    public abstract selectEventsByDay$(day: Date): Observable<EventEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
