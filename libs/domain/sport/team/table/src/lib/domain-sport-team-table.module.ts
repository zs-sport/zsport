import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeamTableComponent } from './component';

@NgModule({
    declarations: [TeamTableComponent],
    exports: [TeamTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportTeamTableModule {}
