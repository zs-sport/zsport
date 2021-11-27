import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportTeamFormModule } from '@zsport/domain/sport/team/form';
import { DomainSportTeamTableModule } from '@zsport/domain/sport/team/table';

import { TeamAdminComponent } from './page/admin';
import { TeamEditComponent, TeamEditResolverService } from './page/edit';
import { TeamListComponent, TeamListResolverService } from './page/list';
import { TeamAdminPermissionsService } from './service';
import { TeamAdminRoutingModule } from './team-admin-routing.module';

@NgModule({
    declarations: [TeamAdminComponent, TeamEditComponent, TeamListComponent],
    imports: [
        CommonModule,
        TeamAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainSportTeamFormModule,
        DomainSportTeamTableModule,
    ],
    providers: [TeamEditResolverService, TeamListResolverService, TeamAdminPermissionsService],
})
export class DomainSportTeamAdminModule {}
