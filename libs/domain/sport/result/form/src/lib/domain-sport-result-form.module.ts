import { DynamicModule } from 'ng-dynamic-component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreI18nModule } from '@zsport/core/i18n';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { ResultFormComponent } from './component';

@NgModule({
    declarations: [ResultFormComponent],
    exports: [ResultFormComponent],
    imports: [
        CommonModule,
        CoreI18nModule,
        DynamicModule,
        UiDynamicFormModule,
        NzButtonModule,
        NzFormModule,
        NzInputNumberModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class DomainSportResultFormModule {}
