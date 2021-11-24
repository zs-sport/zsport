import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryDataService } from '@zsport/api';

import { CategoryDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CategoryDataService,
            useClass: CategoryDataServiceImpl,
        },
    ],
})
export class DomainSportCategoryDataModule {}
