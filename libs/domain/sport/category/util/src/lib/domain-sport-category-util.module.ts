import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryQuantityService, CategoryUtilService } from '@zsport/api';

import { CategoryQuantityServiceImpl, CategoryUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CategoryQuantityService,
            useClass: CategoryQuantityServiceImpl,
        },
        {
            provide: CategoryUtilService,
            useClass: CategoryUtilServiceImpl,
        },
    ],
})
export class DomainSportCategoryUtilModule {}
