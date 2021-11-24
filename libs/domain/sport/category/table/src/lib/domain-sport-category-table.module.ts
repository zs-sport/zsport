import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoryTableComponent } from './component';

@NgModule({
    declarations: [CategoryTableComponent],
    exports: [CategoryTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportCategoryTableModule {}
