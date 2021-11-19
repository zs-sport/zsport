import { Observable } from 'rxjs';

import { EntityDataService } from '../../../base';
import { MatchPlayerModel } from '../../match';
import { PlayerModel } from '../model';

export abstract class PlayerDataService extends EntityDataService {
    protected readonly AGE_GROUP_GENDER_CATEGORY = 'ageGroupGenderCategory';

    public constructor() {
        super();
    }

    public abstract listMatchPlayersByMatchId(matchId: string): Observable<MatchPlayerModel[]>;
    public abstract listPlayerByAGGCIdAndClubId(aggcId: string, clubId: string): Observable<PlayerModel[]>;
    public abstract listPlayersByAGGCId(aggcId: string): Observable<PlayerModel[]>;
}
