import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PersonTableComponent } from './component';

@NgModule({
    declarations: [PersonTableComponent],
    exports: [PersonTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainPersonTableModule {}
