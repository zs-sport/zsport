import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeriodUtilService } from '@zsport/api';

import { PeriodUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PeriodUtilService,
            useClass: PeriodUtilServiceImpl,
        },
    ],
})
export class DomainSportPeriodUtilModule {}
