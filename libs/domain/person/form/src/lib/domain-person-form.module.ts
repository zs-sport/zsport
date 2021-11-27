import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { PersonFormComponent } from './component';

@NgModule({
    declarations: [PersonFormComponent],
    exports: [PersonFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainPersonFormModule {}
