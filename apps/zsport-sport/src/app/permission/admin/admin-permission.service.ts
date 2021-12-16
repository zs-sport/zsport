import { Injectable } from '@angular/core';
import { ActionEnum, PermissionsService } from '@zsport/api';

import { AdminResourceEnum } from '../../page/admin-page/enum';

@Injectable()
export class AdminPermissionsService {
    public static viewAdminPage = ActionEnum.VIEW.toString() + AdminResourceEnum.ADMIN_PAGE.toString();

    constructor() {
        PermissionsService.addPermissions([AdminPermissionsService.viewAdminPage]);
    }
}
