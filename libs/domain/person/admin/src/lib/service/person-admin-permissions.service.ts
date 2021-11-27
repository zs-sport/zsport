import { Injectable } from '@angular/core';
import { ActionEnum, PersonPermissionsService, PersonResourceEnum } from '@zsport/api';

@Injectable()
export class PersonAdminPermissionsService extends PersonPermissionsService {
    static readonly viewPersonAdminPage = ActionEnum.VIEW.toString() + PersonResourceEnum.PERSON_ADMIN_PAGE.toString();
    static readonly viewPersonEditPage = ActionEnum.VIEW.toString() + PersonResourceEnum.PERSON_EDIT_PAGE.toString();
    static readonly viewPersonListPage = ActionEnum.VIEW.toString() + PersonResourceEnum.PERSON_LIST_PAGE.toString();
}
