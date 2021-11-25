import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenderUtilService } from '@zsport/api';

import { GenderUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: GenderUtilService,
            useClass: GenderUtilServiceImpl,
        },
    ],
})
export class DomainGenderUtilModule {}
