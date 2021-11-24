import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryUtilService } from '@zsport/api';

import { CategoryUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CategoryUtilService,
            useClass: CategoryUtilServiceImpl,
        },
    ],
})
export class DomainSportCategoryUtilModule {}
