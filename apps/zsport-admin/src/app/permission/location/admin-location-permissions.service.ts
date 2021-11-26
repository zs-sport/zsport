import { Injectable } from '@angular/core';
import { LocationPermissionsService, PermissionsService } from '@zsport/api';
import { LocationAdminPermissionsService } from '@zsport/domain/location/admin';

@Injectable()
export class AdminLocationPermissionsService extends LocationAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            LocationAdminPermissionsService.viewLocationAdminPage,
            LocationAdminPermissionsService.viewLocationEditPage,
            LocationAdminPermissionsService.viewLocationListPage,
            LocationPermissionsService.createLocationEntity,
            LocationPermissionsService.deleteLocationEntity,
            LocationPermissionsService.updateLocationEntity,
            LocationPermissionsService.viewLocationEntity,
        ]);
    }
}
