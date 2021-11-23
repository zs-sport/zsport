import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgeGroupUtilService } from '@zsport/api';

import { AgeGroupUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: AgeGroupUtilService,
            useClass: AgeGroupUtilServiceImpl,
        },
    ],
})
export class DomainSportAgeGroupUtilModule {}
