import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoleTableComponent } from './component';

@NgModule({
    declarations: [RoleTableComponent],
    exports: [RoleTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainRoleTableModule {}
