import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { ResultFormComponent } from './component';

@NgModule({
    declarations: [ResultFormComponent],
    exports: [ResultFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainSportResultFormModule {}
