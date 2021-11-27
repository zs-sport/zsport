import { Injectable } from '@angular/core';
import { PermissionsService, PersonPermissionsService } from '@zsport/api';
import { PersonAdminPermissionsService } from '@zsport/domain/person/admin';

@Injectable()
export class AdminPersonPermissionsService extends PersonAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            PersonAdminPermissionsService.viewPersonAdminPage,
            PersonAdminPermissionsService.viewPersonEditPage,
            PersonAdminPermissionsService.viewPersonListPage,
            PersonPermissionsService.createPersonEntity,
            PersonPermissionsService.deletePersonEntity,
            PersonPermissionsService.updatePersonEntity,
            PersonPermissionsService.viewPersonEntity,
        ]);
    }
}
