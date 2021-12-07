import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResultTableComponent } from './component';

@NgModule({
    declarations: [ResultTableComponent],
    exports: [ResultTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportResultTableModule {}
