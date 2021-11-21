import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserTableComponent } from './component';

@NgModule({
    declarations: [UserTableComponent],
    exports: [UserTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainUserTableModule {}
