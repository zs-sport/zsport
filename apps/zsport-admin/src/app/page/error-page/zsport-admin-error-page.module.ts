import { NzResultModule } from 'ng-zorro-antd/result';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ZsportAdminErrorPageComponent } from './zsport-admin-error-page.component';

@NgModule({
    declarations: [ZsportAdminErrorPageComponent],
    exports: [ZsportAdminErrorPageComponent],
    imports: [CommonModule, RouterModule, CoreI18nModule, NzResultModule],
})
export class ZsportAdminErrorPageModule {}
