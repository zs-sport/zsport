import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventTableComponent } from './component';

@NgModule({
    declarations: [EventTableComponent],
    exports: [EventTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportEventTableModule {}
