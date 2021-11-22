import { Injectable } from '@angular/core';
import { ActionEnum, RolePermissionsService, RoleResourceEnum } from '@zsport/api';

@Injectable()
export class RoleAdminPermissionsService extends RolePermissionsService {
    static readonly viewRoleAdminPage = ActionEnum.VIEW.toString() + RoleResourceEnum.ROLE_ADMIN_PAGE.toString();
    static readonly viewRoleEditPage = ActionEnum.VIEW.toString() + RoleResourceEnum.ROLE_EDIT_PAGE.toString();
    static readonly viewRoleListPage = ActionEnum.VIEW.toString() + RoleResourceEnum.ROLE_LIST_PAGE.toString();
}
