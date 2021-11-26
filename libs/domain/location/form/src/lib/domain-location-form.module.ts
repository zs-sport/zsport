import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { LocationFormComponent } from './component';

@NgModule({
    declarations: [LocationFormComponent],
    exports: [LocationFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainLocationFormModule {}
