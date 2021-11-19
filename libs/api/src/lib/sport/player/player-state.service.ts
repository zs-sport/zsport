import { Observable } from 'rxjs';

import { EntityStateService } from '../../../base';
import { PlayerEntity } from '../entity';

export abstract class PlayerStateService extends EntityStateService {
    public constructor() {
        super();
    }

    public abstract dispatchAddPlayerByClubIdAction(player: PlayerEntity, clubId: string): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListPlayersByClubIdAction(clubId: string): void;
    public abstract dispatchUpdatePlayerByClubIdAction(player: PlayerEntity, clubId: string): void;
    public abstract selectEntitiesByClubId$(clubId: string): Observable<PlayerEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
