import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ZsportAdminHomePageContentComponent } from './component';
import { ZsportAdminHomePageRoutingModule } from './zsport-admin-home-page-routing.module';
import { ZsportAdminHomePageComponent } from './zsport-admin-home-page.component';

@NgModule({
    declarations: [ZsportAdminHomePageComponent, ZsportAdminHomePageContentComponent],
    imports: [
        CommonModule,
        ZsportAdminHomePageRoutingModule,
        NzCardModule,
        NzGridModule,
        NzIconModule,
        NzLayoutModule,
        NzListModule,
        CoreI18nModule,
    ],
})
export class ZsportAdminHomePageModule {}
