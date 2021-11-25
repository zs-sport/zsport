import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClubTableComponent } from './component';

@NgModule({
    declarations: [ClubTableComponent],
    exports: [ClubTableComponent],
    imports: [CommonModule, DynamicModule],
})
export class DomainSportClubTableModule {}
