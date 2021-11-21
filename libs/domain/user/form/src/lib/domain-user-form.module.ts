import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { UserFormComponent } from './component';

@NgModule({
    declarations: [UserFormComponent],
    exports: [UserFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainUserFormModule {}
