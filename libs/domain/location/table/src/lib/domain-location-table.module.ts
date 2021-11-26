import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LocationTableComponent } from './component';

@NgModule({
    declarations: [LocationTableComponent],
    exports: [LocationTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainLocationTableModule {}
