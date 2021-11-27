import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainPersonFormModule } from '@zsport/domain/person/form';
import { DomainPersonTableModule } from '@zsport/domain/person/table';

import { PersonAdminComponent } from './page/admin';
import { PersonEditComponent, PersonEditResolverService } from './page/edit';
import { PersonListComponent, PersonListResolverService } from './page/list';
import { PersonAdminRoutingModule } from './person-admin-routing.module';

@NgModule({
    declarations: [PersonAdminComponent, PersonEditComponent, PersonListComponent],
    imports: [
        CommonModule,
        PersonAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainPersonFormModule,
        DomainPersonTableModule,
    ],
    providers: [PersonEditResolverService, PersonListResolverService],
})
export class DomainPersonAdminModule {}
