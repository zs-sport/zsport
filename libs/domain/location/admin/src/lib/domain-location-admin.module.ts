import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainLocationFormModule } from '@zsport/domain/location/form';
import { DomainLocationTableModule } from '@zsport/domain/location/table';
import { CoreI18nModule } from '@zsport/core/i18n';

import { LocationAdminRoutingModule } from './location-admin-routing.module';
import { LocationAdminComponent } from './page/admin';
import { LocationEditComponent, LocationEditResolverService } from './page/edit';
import { LocationListComponent, LocationListResolverService } from './page/list';

@NgModule({
    declarations: [LocationAdminComponent, LocationEditComponent, LocationListComponent],
    imports: [
        CommonModule,
        LocationAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainLocationFormModule,
        DomainLocationTableModule,
    ],
    providers: [LocationEditResolverService, LocationListResolverService],
})
export class DomainLocationAdminModule {}
