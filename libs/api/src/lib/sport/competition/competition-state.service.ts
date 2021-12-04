import { Observable } from 'rxjs';

import { EntityStateService } from '../../base';
import { Event } from '../event';

export abstract class CompetitionStateService extends EntityStateService {
    public abstract dispatchAddEventByCompetitionId(event: Event): void;
    public abstract dispatchAddEventByGroupLevelIndexGroupTitle(event: Event, index: number, title: string): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchChangeSelectedfinalTabId(selectedFinalTabId: number): void;
    public abstract dispatchListEventsByCompetitionId(competitionId: string): void;
    public abstract dispatchSelectCompetitionAction(uid: string): void;
    public abstract dispatchUpdateEventByCompetitionId(event: Event): void;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
    public abstract selectSelectedFinalTabId$(): Observable<number>;
}
