import { Injectable } from '@angular/core';
import { ActionEnum, PermissionsService, TeamPermissionsService, TeamResourceEnum } from '@zsport/api';

@Injectable()
export class TeamAdminPermissionsService extends TeamPermissionsService {
    static readonly viewTeamAdminPage = ActionEnum.VIEW.toString() + TeamResourceEnum.TEAM_ADMIN_PAGE.toString();
    static readonly viewTeamEditPage = ActionEnum.VIEW.toString() + TeamResourceEnum.TEAM_EDIT_PAGE.toString();
    static readonly viewTeamListPage = ActionEnum.VIEW.toString() + TeamResourceEnum.TEAM_LIST_PAGE.toString();

    constructor() {
        super();

        PermissionsService.addPermissions([
            TeamAdminPermissionsService.viewTeamAdminPage,
            TeamAdminPermissionsService.viewTeamEditPage,
            TeamAdminPermissionsService.viewTeamListPage,
            TeamPermissionsService.createTeamEntity,
            TeamPermissionsService.deleteTeamEntity,
            TeamPermissionsService.updateTeamEntity,
            TeamPermissionsService.viewTeamEntity,
        ]);
    }
}
