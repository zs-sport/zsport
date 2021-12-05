import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountryUtilService } from '@zsport/api';

import { CountryUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CountryUtilService,
            useClass: CountryUtilServiceImpl,
        },
    ],
})
export class DomainCountryUtilModule {}
