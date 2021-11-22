import { Observable } from 'rxjs';

import { EntityDataService } from '../../base';
import { EventPlayer } from '../event';
import { PlayerModel } from './player.model';

export abstract class PlayerDataService extends EntityDataService {
    protected readonly AGE_GROUP_GENDER_CATEGORY = 'ageGroupGenderCategory';

    public abstract listEventPlayersByEventId(eventId: string): Observable<EventPlayer[]>;
    public abstract listPlayerByAGGCIdAndClubId(aggcId: string, clubId: string): Observable<PlayerModel[]>;
    public abstract listPlayersByAGGCId(aggcId: string): Observable<PlayerModel[]>;
}
