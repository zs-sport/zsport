import { Injectable } from '@angular/core';
import { ActionEnum, ClubPermissionsService, ClubResourceEnum } from '@zsport/api';

@Injectable()
export class ClubAdminPermissionsService extends ClubPermissionsService {
    static readonly viewClubAdminPage = ActionEnum.VIEW.toString() + ClubResourceEnum.CLUB_ADMIN_PAGE.toString();
    static readonly viewClubEditPage = ActionEnum.VIEW.toString() + ClubResourceEnum.CLUB_EDIT_PAGE.toString();
    static readonly viewClubListPage = ActionEnum.VIEW.toString() + ClubResourceEnum.CLUB_LIST_PAGE.toString();
}
