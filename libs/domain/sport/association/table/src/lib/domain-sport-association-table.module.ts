import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AssociationTableComponent } from './component';

@NgModule({
    declarations: [AssociationTableComponent],
    exports: [AssociationTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportAssociationTableModule {}
