import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompetitionTableComponent } from './component';

@NgModule({
    declarations: [CompetitionTableComponent],
    exports: [CompetitionTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportCompetitionTableModule {}
