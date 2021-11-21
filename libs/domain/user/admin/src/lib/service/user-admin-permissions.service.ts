import { Injectable } from '@angular/core';
import { ActionEnum, UserPermissionsService, UserResourceEnum } from '@zsport/api';

@Injectable()
export class UserAdminPermissionsService extends UserPermissionsService {
    static readonly viewUserAdminPage = ActionEnum.VIEW.toString() + UserResourceEnum.USER_ADMIN_PAGE.toString();
    static readonly viewUserEditPage = ActionEnum.VIEW.toString() + UserResourceEnum.USER_EDIT_PAGE.toString();
    static readonly viewUserListPage = ActionEnum.VIEW.toString() + UserResourceEnum.USER_LIST_PAGE.toString();
}
