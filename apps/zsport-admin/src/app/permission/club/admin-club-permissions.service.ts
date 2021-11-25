import { Injectable } from '@angular/core';
import { ClubPermissionsService, PermissionsService } from '@zsport/api';
import { ClubAdminPermissionsService } from '@zsport/domain/sport/club/admin';

@Injectable()
export class AdminClubPermissionsService extends ClubAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            ClubAdminPermissionsService.viewClubAdminPage,
            ClubAdminPermissionsService.viewClubEditPage,
            ClubAdminPermissionsService.viewClubListPage,
            ClubPermissionsService.createClubEntity,
            ClubPermissionsService.deleteClubEntity,
            ClubPermissionsService.updateClubEntity,
            ClubPermissionsService.viewClubEntity,
        ]);
    }
}
