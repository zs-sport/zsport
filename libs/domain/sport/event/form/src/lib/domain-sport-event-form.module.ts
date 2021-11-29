import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { EventFormComponent } from './component';

@NgModule({
    declarations: [EventFormComponent],
    exports: [EventFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainSportEventFormModule {}
