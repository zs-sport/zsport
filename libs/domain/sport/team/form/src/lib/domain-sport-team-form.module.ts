import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { TeamFormComponent } from './component';

@NgModule({
    declarations: [TeamFormComponent],
    exports: [TeamFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainSportTeamFormModule {}
