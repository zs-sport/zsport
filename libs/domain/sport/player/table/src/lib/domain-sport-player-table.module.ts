import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayerTableComponent } from './component';

@NgModule({
    declarations: [PlayerTableComponent],
    exports: [PlayerTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportPlayerTableModule {}
