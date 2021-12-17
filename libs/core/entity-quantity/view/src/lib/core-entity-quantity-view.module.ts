import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EntityQuantitiesComponent } from './component/entity-quantities/entity-quantities.component';
import { EntityQuantitiesDirective } from './directive';
import { EntityQuantitiesService } from './service';

@NgModule({
    declarations: [EntityQuantitiesDirective, EntityQuantitiesComponent],
    exports: [EntityQuantitiesDirective],
    imports: [CommonModule],
    providers: [EntityQuantitiesService],
})
export class CoreEntityQuantityViewModule {}
