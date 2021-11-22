import { Injectable } from '@angular/core';
import { ActionEnum, PermissionsService } from '@zsport/api';

import { ZsportAdminAdminResourceEnum } from '../../page/admin-page/enum';

@Injectable()
export class ZsportAdminAdminPermissionsService {
    public static viewAdminPage = ActionEnum.VIEW.toString() + ZsportAdminAdminResourceEnum.ADMIN_PAGE.toString();

    constructor() {
        PermissionsService.addPermissions([ZsportAdminAdminPermissionsService.viewAdminPage]);
    }
}
