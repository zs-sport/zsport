import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPermissionsService } from './admin';
import { AdminUserPermissionsService } from './user';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        AdminPermissionsService,
        AdminUserPermissionsService,
    ],
})
export class PermissionModule {}
