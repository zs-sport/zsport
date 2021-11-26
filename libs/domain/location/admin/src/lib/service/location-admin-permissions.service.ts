import { Injectable } from '@angular/core';
import { ActionEnum, LocationPermissionsService, LocationResourceEnum } from '@zsport/api';

@Injectable()
export class LocationAdminPermissionsService extends LocationPermissionsService {
    static readonly viewLocationAdminPage =
        ActionEnum.VIEW.toString() + LocationResourceEnum.LOCATION_ADMIN_PAGE.toString();
    static readonly viewLocationEditPage =
        ActionEnum.VIEW.toString() + LocationResourceEnum.LOCATION_EDIT_PAGE.toString();
    static readonly viewLocationListPage =
        ActionEnum.VIEW.toString() + LocationResourceEnum.LOCATION_LIST_PAGE.toString();
}
