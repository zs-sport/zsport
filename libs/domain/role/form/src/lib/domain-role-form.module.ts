import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiDynamicFormModule } from '@zsport/ui/dynamic-form';

import { RoleFormComponent } from './component';

@NgModule({
    declarations: [RoleFormComponent],
    exports: [RoleFormComponent],
    imports: [CommonModule, DynamicModule, UiDynamicFormModule],
})
export class DomainRoleFormModule {}
