import { Injectable } from '@angular/core';
import { PermissionsService, RolePermissionsService } from '@zsport/api';
import { RoleAdminPermissionsService } from '@zsport/domain/role/admin';

@Injectable()
export class ZsportAdminAdminRolePermissionsService extends RoleAdminPermissionsService {
    public constructor() {
        super();

        PermissionsService.addPermissions([
            RoleAdminPermissionsService.viewRoleAdminPage,
            RoleAdminPermissionsService.viewRoleEditPage,
            RoleAdminPermissionsService.viewRoleListPage,
            RolePermissionsService.createRoleEntity,
            RolePermissionsService.deleteRoleEntity,
            RolePermissionsService.updateRoleEntity,
            RolePermissionsService.viewRoleEntity,
        ]);
    }
}
