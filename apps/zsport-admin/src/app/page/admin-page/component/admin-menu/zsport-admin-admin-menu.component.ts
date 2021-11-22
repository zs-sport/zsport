import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoleNames } from '@zsport/api';

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
    public viewRoleAdminPage = ZsportAdminAdminRolePermissionsService.viewRoleAdminPage;
    public viewUserAdminPage = ZsportAdminAdminUserPermissionsService.viewUserAdminPage;

    public constructor() {
        this.isCollapsed = false;
    }
}
