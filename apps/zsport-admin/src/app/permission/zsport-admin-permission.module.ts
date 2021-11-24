import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZsportAdminAdminPermissionsService } from './admin';
import { AdminCategoryPermissionsService } from './category';
import { ZsportAdminAdminRolePermissionsService } from './role';
import { ZsportAdminAdminUserPermissionsService } from './user';

@NgModule({
    imports: [CommonModule],
    providers: [
        AdminCategoryPermissionsService,
        ZsportAdminAdminPermissionsService,
        ZsportAdminAdminRolePermissionsService,
        ZsportAdminAdminUserPermissionsService,
    ],
})
export class ZsportAdminPermissionModule {}
