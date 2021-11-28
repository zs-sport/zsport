import { Injectable } from '@angular/core';
import { ActionEnum, PermissionsService, PlayerPermissionsService, PlayerResourceEnum } from '@zsport/api';

@Injectable()
export class PlayerAdminPermissionsService extends PlayerPermissionsService {
    static readonly viewPlayerAdminPage = ActionEnum.VIEW.toString() + PlayerResourceEnum.PLAYER_ADMIN_PAGE.toString();
    static readonly viewPlayerEditPage = ActionEnum.VIEW.toString() + PlayerResourceEnum.PLAYER_EDIT_PAGE.toString();
    static readonly viewPlayerListPage = ActionEnum.VIEW.toString() + PlayerResourceEnum.PLAYER_LIST_PAGE.toString();

    constructor() {
        super();

        PermissionsService.addPermissions([
            PlayerAdminPermissionsService.viewPlayerAdminPage,
            PlayerAdminPermissionsService.viewPlayerEditPage,
            PlayerAdminPermissionsService.viewPlayerListPage,
            PlayerPermissionsService.createPlayerEntity,
            PlayerPermissionsService.deletePlayerEntity,
            PlayerPermissionsService.updatePlayerEntity,
            PlayerPermissionsService.viewPlayerEntity,
        ]);
    }
}
