import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NgxPermissionsModule } from 'ngx-permissions';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { DomainSportPlayerFormModule } from '@zsport/domain/sport/player/form';
import { DomainSportPlayerTableModule } from '@zsport/domain/sport/player/table';

import { PlayerAdminComponent } from './page/admin';
import { PlayerEditComponent, PlayerEditResolverService } from './page/edit';
import { PlayerListComponent, PlayerListResolverService } from './page/list';
import { PlayerAdminRoutingModule } from './player-admin-routing.module';
import { PlayerAdminPermissionsService } from './service';

@NgModule({
    declarations: [PlayerAdminComponent, PlayerEditComponent, PlayerListComponent],
    imports: [
        CommonModule,
        PlayerAdminRoutingModule,
        NgxPermissionsModule,
        NzButtonModule,
        NzPageHeaderModule,
        CoreI18nModule,
        DomainSportPlayerFormModule,
        DomainSportPlayerTableModule,
    ],
    providers: [PlayerEditResolverService, PlayerListResolverService, PlayerAdminPermissionsService],
})
export class DomainSportPlayerAdminModule {}
