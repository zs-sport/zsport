import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainSportClubFormModule } from '@zsport/domain/sport/club/form';
import { DomainSportClubTableModule } from '@zsport/domain/sport/club/table';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ClubAdminRoutingModule } from './club-admin-routing.module';
import { ClubAdminComponent } from './page/admin';
import { ClubEditComponent, ClubEditResolverService } from './page/edit';
import { EditDetailsComponent } from './page/edit-details';
import { ClubListComponent, ClubListResolverService } from './page/list';

@NgModule({
    declarations: [ClubAdminComponent, ClubEditComponent, ClubListComponent, EditDetailsComponent],
    imports: [
        CommonModule,
        ClubAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        NzTabsModule,
        CoreI18nModule,
        DomainSportClubFormModule,
        DomainSportClubTableModule,
    ],
    providers: [ClubEditResolverService, ClubListResolverService],
})
export class DomainSportClubAdminModule {}
