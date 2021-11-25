import { NzIconService } from 'ng-zorro-antd/icon';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ZsportAdminAdminPermissionsService } from '../../permission/admin';
import { AdminAssociationPermissionsService } from '../../permission/association';
import { AdminCategoryPermissionsService } from '../../permission/category';
import { AdminClubPermissionsService } from '../../permission/club';
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
        private adminAssociationPermissionsService: AdminAssociationPermissionsService,
        private adminClubPermissionsService: AdminClubPermissionsService,
        private adminCategoryPermissionsService: AdminCategoryPermissionsService,
        private adminRolePermissionsService: ZsportAdminAdminRolePermissionsService,
        private adminUserPermissionsService: ZsportAdminAdminUserPermissionsService
    ) {
        this.title = 'Admin';
    }
}
