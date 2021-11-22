import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';

import { DomainRoleFormModule } from '@zsport/domain/role/form';
import { DomainRoleTableModule } from '@zsport/domain/role/table';
import { RoleAdminComponent } from './page/admin';
import { RoleEditComponent, RoleEditResolverService } from './page/edit';
import { RoleListComponent, RoleListResolverService } from './page/list';
import { DomainRoleAdminRoutingModule } from './domain-role-admin-routing.module';

@NgModule({
    declarations: [RoleAdminComponent, RoleEditComponent, RoleListComponent],
    imports: [
        CommonModule,
        DomainRoleAdminRoutingModule,
        NgxPermissionsModule.forChild(),
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainRoleFormModule,
        DomainRoleTableModule,
    ],
    providers: [RoleEditResolverService, RoleListResolverService],
})
export class DomainRoleAdminModule {}
