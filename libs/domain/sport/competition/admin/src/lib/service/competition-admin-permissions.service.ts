import { Injectable } from '@angular/core';
import { ActionEnum, CompetitionPermissionsService, CompetitionResourceEnum } from '@zsport/api';

@Injectable()
export class CompetitionAdminPermissionsService extends CompetitionPermissionsService {
    static readonly viewCompetitionAdminPage =
        ActionEnum.VIEW.toString() + CompetitionResourceEnum.COMPETITION_ADMIN_PAGE.toString();
    static readonly viewCompetitionEditPage =
        ActionEnum.VIEW.toString() + CompetitionResourceEnum.COMPETITION_EDIT_PAGE.toString();
    static readonly viewCompetitionListPage =
        ActionEnum.VIEW.toString() + CompetitionResourceEnum.COMPETITION_LIST_PAGE.toString();
}
