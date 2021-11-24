import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { CategoryFormComponent } from './component';

@NgModule({
    declarations: [CategoryFormComponent],
    exports: [CategoryFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainSportCategoryFormModule {}
