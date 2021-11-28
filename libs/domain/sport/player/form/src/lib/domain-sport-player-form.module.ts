import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { PlayerFormComponent } from './component';

@NgModule({
    declarations: [PlayerFormComponent],
    exports: [PlayerFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainSportPlayerFormModule {}
