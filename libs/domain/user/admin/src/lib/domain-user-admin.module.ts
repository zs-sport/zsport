import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainUserFormModule } from '@zsport/domain/user/form';
import { DomainUserTableModule } from '@zsport/domain/user/table';

import { DomainUserAdminRoutingModule } from './domain-user-admin-routing.module';
import { UserAdminComponent } from './page/admin';
import { EditComponent, EditResolverService } from './page/edit';
import { ListComponent, ListResolverService } from './page/list';

@NgModule({
    declarations: [UserAdminComponent, EditComponent, ListComponent],
    imports: [
        CommonModule,
        DomainUserAdminRoutingModule,
        NgxPermissionsModule.forChild(),
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainUserTableModule,
        DomainUserFormModule,
    ],
    providers: [EditResolverService, ListResolverService],
})
export class DomainUserAdminModule {}
