import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ZsportAdminAdminPermissionsService } from './admin';
import { AdminAssociationPermissionsService } from './association';
import { AdminCategoryPermissionsService } from './category';
import { AdminClubPermissionsService } from './club';
import { AdminCompetitionPermissionsService } from './competition';
import { AdminEventPermissionsService } from './event';
import { AdminLocationPermissionsService } from './location';
import { AdminPersonPermissionsService } from './person';
import { ZsportAdminAdminRolePermissionsService } from './role';
import { ZsportAdminAdminUserPermissionsService } from './user';

@NgModule({
    imports: [CommonModule],
    providers: [
        AdminAssociationPermissionsService,
        AdminCategoryPermissionsService,
        AdminClubPermissionsService,
        AdminCompetitionPermissionsService,
        AdminEventPermissionsService,
        AdminLocationPermissionsService,
        AdminPersonPermissionsService,
        ZsportAdminAdminPermissionsService,
        ZsportAdminAdminRolePermissionsService,
        ZsportAdminAdminUserPermissionsService,
    ],
})
export class ZsportAdminPermissionModule {}
