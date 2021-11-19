import { ActionEnum } from '../../action';
import { ClubResourceEnum } from '../club';

export class ClubPermissionsService {
    static readonly createClubEntity = ActionEnum.CREATE.toString() + ClubResourceEnum.CLUB_ENTITY.toString();
    static readonly deleteClubEntity = ActionEnum.DELETE.toString() + ClubResourceEnum.CLUB_ENTITY.toString();
    static readonly updateClubEntity = ActionEnum.UPDATE.toString() + ClubResourceEnum.CLUB_ENTITY.toString();
    static readonly viewClubEntity = ActionEnum.VIEW.toString() + ClubResourceEnum.CLUB_ENTITY.toString();
}
