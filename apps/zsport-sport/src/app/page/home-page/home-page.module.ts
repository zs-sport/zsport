import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';

import { HomePageContentComponent } from './component/home-page-content/home-page-content.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    declarations: [HomePageComponent, HomePageContentComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        NzCardModule,
        NzGridModule,
        NzIconModule,
        NzLayoutModule,
        NzListModule,
        CoreI18nModule,
    ],
})
export class HomePageModule {}
