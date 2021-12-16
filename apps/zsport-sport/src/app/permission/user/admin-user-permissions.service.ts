import { Injectable } from '@angular/core';
import { PermissionsService } from '@zsport/api';
import { UserAdminPermissionsService } from '@zsport/domain/user/admin';

@Injectable()
export class AdminUserPermissionsService extends UserAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            UserAdminPermissionsService.viewUserAdminPage,
            UserAdminPermissionsService.viewUserEditPage,
            UserAdminPermissionsService.viewUserListPage,
            UserAdminPermissionsService.createUserEntity,
            UserAdminPermissionsService.updateUserEntity,
            UserAdminPermissionsService.viewUserEntity,
        ]);
    }
}
