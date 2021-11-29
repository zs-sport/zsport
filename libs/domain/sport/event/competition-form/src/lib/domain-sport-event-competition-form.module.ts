import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { EventCompetitionFormComponent } from './component';

@NgModule({
    declarations: [EventCompetitionFormComponent],
    exports: [EventCompetitionFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainSportEventCompetitionFormModule {}
