import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultDataService } from '@zsport/api';

import { ResultDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ResultDataService,
            useClass: ResultDataServiceImpl,
        },
    ],
})
export class DomainSportResultDataModule {}
