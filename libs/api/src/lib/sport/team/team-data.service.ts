import { Observable } from 'rxjs';

import { EntityDataService } from '../../base';
import { EventTeam } from '../event';
import { TeamModel } from './team.model';

export abstract class TeamDataService extends EntityDataService {
    protected readonly AGE_GROUP_GENDER_CATEGORY = 'ageGroupGenderCategory';

    public abstract listEventTeamsByEventId(eventId: string): Observable<EventTeam[]>;
    public abstract listTeamByAGGCIdAndClubId(aggcId: string, clubId: string): Observable<TeamModel[]>;
    public abstract listTeamsByAGGCId(aggcId: string): Observable<TeamModel[]>;
}
