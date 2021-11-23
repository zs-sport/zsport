import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { AssociationFormComponent } from './component';

@NgModule({
    declarations: [AssociationFormComponent],
    exports: [AssociationFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainSportAssociationFormModule {}
