import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportCompetitionFormModule } from '@zsport/domain/sport/competition/form';
import { DomainSportCompetitionTableModule } from '@zsport/domain/sport/competition/table';

import { CompetitionAdminRoutingModule } from './competition-admin-routing.module';
import { CompetitionAdminComponent } from './page/admin';
import { CompetitionEditComponent, CompetitionEditResolverService } from './page/edit';
import { CompetitionListComponent, CompetitionListResolverService } from './page/list';

@NgModule({
    declarations: [CompetitionAdminComponent, CompetitionEditComponent, CompetitionListComponent],
    imports: [
        CommonModule,
        CompetitionAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        NzTabsModule,
        CoreI18nModule,
        DomainSportCompetitionFormModule,
        DomainSportCompetitionTableModule,
    ],
    providers: [CompetitionEditResolverService, CompetitionListResolverService],
})
export class DomainSportCompetitionAdminModule {}
