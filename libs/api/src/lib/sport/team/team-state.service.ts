import { Observable } from 'rxjs';
import { TeamEntity } from '.';

import { EntityStateService } from '../../base';
import { EventTeam } from '../event';
import { Team } from './team';

export abstract class TeamStateService extends EntityStateService {
    public abstract dispatchAddTeamByClubIdAction(team: Team, clubId: string): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListEventTeamsByEventIdAction(eventId: string): void;
    public abstract dispatchListTeamByAGGCIdAndClubIds(aggcId: string, sportClubIds: string[]): void;
    public abstract dispatchListTeamsByAGGCId(aggcId: string): void;
    public abstract dispatchListTeamsByClubIdAction(clubId: string): void;
    public abstract dispatchUpdateEventTeamByEventIdAction(eventTeam: Partial<EventTeam>, eventId: string): void;
    public abstract dispatchUpdateTeamByClubIdAction(team: Team, clubId: string): void;
    public abstract selectEntitiesByClubId$(clubId: string): Observable<Team[]>;
    public abstract selectEventTeamsByEventId$(eventId: string): Observable<TeamEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
    public abstract selectTeamsByAGGCId$(aggcId: string): Observable<Team[]>;
    public abstract selectTeamsByAGGCIdAndClubIds$(aggcId: string, clubIds: string[]): Observable<Team[]>;
}
