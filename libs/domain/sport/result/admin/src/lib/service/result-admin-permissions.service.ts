import { Injectable } from '@angular/core';
import { ActionEnum, PermissionsService, ResultPermissionsService, ResultResourceEnum } from '@zsport/api';

@Injectable()
export class ResultAdminPermissionsService extends ResultPermissionsService {
    static readonly viewResultAdminPage = ActionEnum.VIEW.toString() + ResultResourceEnum.RESULT_ADMIN_PAGE.toString();
    static readonly viewResultEditPage = ActionEnum.VIEW.toString() + ResultResourceEnum.RESULT_EDIT_PAGE.toString();
    static readonly viewResultListPage = ActionEnum.VIEW.toString() + ResultResourceEnum.RESULT_LIST_PAGE.toString();

    constructor() {
        super();

        PermissionsService.addPermissions([
            ResultAdminPermissionsService.viewResultAdminPage,
            ResultAdminPermissionsService.viewResultEditPage,
            ResultAdminPermissionsService.viewResultListPage,
            ResultPermissionsService.createResultEntity,
            ResultPermissionsService.deleteResultEntity,
            ResultPermissionsService.updateResultEntity,
            ResultPermissionsService.viewResultEntity,
        ]);
    }
}
