import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportResultFormModule } from '@zsport/domain/sport/result/form';
import { DomainSportResultTableModule } from '@zsport/domain/sport/result/table';

import { DomainSportResultAdminRoutingModule } from './domain-sport-result-admin-routing.module';
import { ResultAdminComponent } from './page/admin';
import { ResultEditComponent, ResultEditResolverService } from './page/edit';
import { ResultListComponent, ResultListResolverService } from './page/list';

@NgModule({
    declarations: [ResultAdminComponent, ResultEditComponent, ResultListComponent],
    imports: [
        CommonModule,
        DomainSportResultAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        NzTabsModule,
        CoreI18nModule,
        DomainSportResultFormModule,
        DomainSportResultTableModule,
    ],
    providers: [ResultEditResolverService, ResultListResolverService],
})
export class DomainSportResultAdminModule {}
