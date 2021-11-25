import { Injectable } from '@angular/core';
import { AssociationPermissionsService, PermissionsService } from '@zsport/api';
import { AssociationAdminPermissionsService } from '@zsport/domain/sport/association/admin';

@Injectable()
export class AdminAssociationPermissionsService extends AssociationAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            AssociationAdminPermissionsService.viewAssociationAdminPage,
            AssociationAdminPermissionsService.viewAssociationEditPage,
            AssociationAdminPermissionsService.viewAssociationListPage,
            AssociationPermissionsService.createAssociationEntity,
            AssociationPermissionsService.deleteAssociationEntity,
            AssociationPermissionsService.updateAssociationEntity,
            AssociationPermissionsService.viewAssociationEntity,
        ]);
    }
}
