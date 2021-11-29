import { Injectable } from '@angular/core';
import { ActionEnum, EventPermissionsService, EventResourceEnum } from '@zsport/api';

@Injectable()
export class EventAdminPermissionsService extends EventPermissionsService {
    static readonly viewEventAdminPage = ActionEnum.VIEW.toString() + EventResourceEnum.EVENT_ADMIN_PAGE.toString();
    static readonly viewEventEditPage = ActionEnum.VIEW.toString() + EventResourceEnum.EVENT_EDIT_PAGE.toString();
    static readonly viewEventListPage = ActionEnum.VIEW.toString() + EventResourceEnum.EVENT_LIST_PAGE.toString();
}
