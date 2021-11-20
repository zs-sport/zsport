import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreI18nModule } from '@zsport/core/i18n';

import { NgzDynamicTableComponent } from './component/ngz-dynamic-table';

@NgModule({
    declarations: [NgzDynamicTableComponent],
    exports: [NgzDynamicTableComponent],
    imports: [CommonModule, NzTableModule, NzIconModule, NzToolTipModule, RouterModule, CoreI18nModule],
})
export class UiDynamicTableModule {}
