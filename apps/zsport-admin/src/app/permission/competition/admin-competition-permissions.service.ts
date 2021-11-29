import { Injectable } from '@angular/core';
import { CompetitionPermissionsService, PermissionsService } from '@zsport/api';
import { CompetitionAdminPermissionsService } from '@zsport/domain/sport/competition/admin';

@Injectable()
export class AdminCompetitionPermissionsService extends CompetitionAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            CompetitionAdminPermissionsService.viewCompetitionAdminPage,
            CompetitionAdminPermissionsService.viewCompetitionEditPage,
            CompetitionAdminPermissionsService.viewCompetitionListPage,
            CompetitionPermissionsService.createCompetitionEntity,
            CompetitionPermissionsService.deleteCompetitionEntity,
            CompetitionPermissionsService.updateCompetitionEntity,
            CompetitionPermissionsService.viewCompetitionEntity,
        ]);
    }
}
