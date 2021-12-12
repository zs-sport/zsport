import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultUtilService } from '@zsport/api';

import { ResultUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ResultUtilService,
            useClass: ResultUtilServiceImpl,
        },
    ],
})
export class DomainSportResultUtilModule {}
