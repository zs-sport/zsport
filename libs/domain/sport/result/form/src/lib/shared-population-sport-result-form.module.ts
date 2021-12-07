import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedOrganismNgzDynamicFormModule } from '@zs-soft/shared/organism/ngz/dynamic-form';

import { ResultFormComponent } from './component';

@NgModule({
    declarations: [ResultFormComponent],
    exports: [ResultFormComponent],
    imports: [CommonModule, DynamicModule, SharedOrganismNgzDynamicFormModule],
})
export class SharedPopulationSportResultFormModule {}
