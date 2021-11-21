import { NzMenuModule } from 'ng-zorro-antd/menu';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreI18nModule } from '@zsport/core/i18n';

import { NgzHeaderMenuComponent } from './component/ngz-header-menu';

@NgModule({
    imports: [CommonModule, NzMenuModule, RouterModule, CoreI18nModule],
    declarations: [NgzHeaderMenuComponent],
    exports: [NgzHeaderMenuComponent],
})
export class UiHeaderMenuModule {}
