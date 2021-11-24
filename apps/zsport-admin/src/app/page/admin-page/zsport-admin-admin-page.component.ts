import { NzIconService } from 'ng-zorro-antd/icon';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ZsportAdminAdminPermissionsService } from '../../permission/admin';
import { AdminCategoryPermissionsService } from '../../permission/category';
import { ZsportAdminAdminRolePermissionsService } from '../../permission/role';
import { ZsportAdminAdminUserPermissionsService } from '../../permission/user';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zsport-admin-admin-page',
    templateUrl: './zsport-admin-admin-page.component.html',
    styleUrls: ['./zsport-admin-admin-page.component.less'],
})
export class ZsportAdminAdminPageComponent {
    public title: string;

    public constructor(
        private iconService: NzIconService,
        private adminPermissionsService: ZsportAdminAdminPermissionsService,
        private adminCategoryPermissionsService: AdminCategoryPermissionsService,
        private adminRolePermissionsService: ZsportAdminAdminRolePermissionsService,
        private adminUserPermissionsService: ZsportAdminAdminUserPermissionsService
    ) {
        this.title = 'Admin';
    }
}
