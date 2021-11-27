import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoleNames } from '@zsport/api';

import { AdminAssociationPermissionsService } from '../../../../permission/association';
import { AdminCategoryPermissionsService } from '../../../../permission/category';
import { AdminClubPermissionsService } from '../../../../permission/club';
import { AdminLocationPermissionsService } from '../../../../permission/location';
import { AdminPersonPermissionsService } from '../../../../permission/person';
import { ZsportAdminAdminRolePermissionsService } from '../../../../permission/role';
import { ZsportAdminAdminUserPermissionsService } from '../../../../permission/user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zsport-admin-admin-menu',
    templateUrl: './zsport-admin-admin-menu.component.html',
    styleUrls: ['./zsport-admin-admin-menu.component.less'],
})
export class ZsportAdminAdminMenuComponent {
    public adminRoleName = RoleNames.ADMIN;
    public isCollapsed: boolean;
    public viewAssociationAdminPagePermission = AdminAssociationPermissionsService.viewAssociationAdminPage;
    public viewCategoryAdminPagePermission = AdminCategoryPermissionsService.viewCategoryAdminPage;
    public viewClubAdminPagePermission = AdminClubPermissionsService.viewClubAdminPage;
    public viewLocationAdminPagePermission = AdminLocationPermissionsService.viewLocationAdminPage;
    public viewPersonAdminPagePermission = AdminPersonPermissionsService.viewPersonAdminPage;
    public viewRoleAdminPagePermission = ZsportAdminAdminRolePermissionsService.viewRoleAdminPage;
    public viewUserAdminPagePermission = ZsportAdminAdminUserPermissionsService.viewUserAdminPage;

    public constructor() {
        this.isCollapsed = false;
    }
}
