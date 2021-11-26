import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZsportAdminAdminPermissionsService } from './admin';
import { AdminAssociationPermissionsService } from './association';
import { AdminCategoryPermissionsService } from './category';
import { AdminClubPermissionsService } from './club';
import { AdminLocationPermissionsService } from './location';
import { ZsportAdminAdminRolePermissionsService } from './role';
import { ZsportAdminAdminUserPermissionsService } from './user';

@NgModule({
    imports: [CommonModule],
    providers: [
        AdminAssociationPermissionsService,
        AdminCategoryPermissionsService,
        AdminClubPermissionsService,
        AdminLocationPermissionsService,
        ZsportAdminAdminPermissionsService,
        ZsportAdminAdminRolePermissionsService,
        ZsportAdminAdminUserPermissionsService,
    ],
})
export class ZsportAdminPermissionModule {}
