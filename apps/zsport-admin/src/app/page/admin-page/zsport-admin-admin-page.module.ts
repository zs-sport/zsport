import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ZsportAdminAdminMenuComponent } from './component/admin-menu';
import { AssociationFactoryModule } from './factory/association';
import { CategoryFactoryModule } from './factory/category';
import { ClubFactoryModule } from './factory/club';
import { LocationFactoryModule } from './factory/location';
import { PersonFactoryModule } from './factory/person';
import { ZsportAdminRoleFactoryModule } from './factory/role';
import { TeamFactoryModule } from './factory/team';
import { ZsportAdminUserFactoryModule } from './factory/user';
import { ZsportAdminAdminRoutingModule } from './zsport-admin-admin-page-routing.module';
import { ZsportAdminAdminPageComponent } from './zsport-admin-admin-page.component';

@NgModule({
    declarations: [ZsportAdminAdminPageComponent, ZsportAdminAdminMenuComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgxPermissionsModule.forChild(),
        NzBreadCrumbModule,
        NzLayoutModule,
        NzGridModule,
        NzIconModule,
        NzMenuModule,
        NzPageHeaderModule,
        CoreI18nModule,
        AssociationFactoryModule,
        CategoryFactoryModule,
        ClubFactoryModule,
        LocationFactoryModule,
        PersonFactoryModule,
        TeamFactoryModule,
        ZsportAdminAdminRoutingModule,
        ZsportAdminRoleFactoryModule,
        ZsportAdminUserFactoryModule,
    ],
})
export class ZsportAdminAdminPageModule {}
