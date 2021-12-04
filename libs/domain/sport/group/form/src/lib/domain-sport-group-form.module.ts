import { NzCardModule } from 'ng-zorro-antd/card';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';

import { GroupFormComponent } from './component';

@NgModule({
    declarations: [GroupFormComponent],
    exports: [GroupFormComponent],
    imports: [CommonModule, NzCardModule, CoreI18nModule],
})
export class DomainSportGroupFormModule {}
