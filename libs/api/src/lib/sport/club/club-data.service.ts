import { Observable } from 'rxjs';

import { EntityDataService } from '../../base';
import { Club } from '../club';
import { Player } from '../player';
import { Team } from '../team';

export abstract class ClubDataService extends EntityDataService {
    public abstract addPlayerByClubId(playerModel: Player, clubId: string): Observable<Player>;
    public abstract addTeamByClubId(team: Team, clubId: string): Observable<Team>;
    public abstract listClubsByAssociationIdCategoryIdGenderIdAgeGroupId(
        associationId: string,
        categoryId: string,
        genderId: string,
        ageGroupId: string
    ): Observable<Club[]>;
    public abstract listClubsByCategoryId(categoryId: string): Observable<Club[]>;
    public abstract listPlayersByClubId(clubId: string): Observable<Player[]>;
    public abstract listTeamsByClubId(clubId: string): Observable<Team[]>;
    public abstract updatePlayerByClubId(player: Player, clubId: string): Observable<Player>;
    public abstract updateTeamByClubId(team: Team, clubId: string): Observable<Team>;
}
