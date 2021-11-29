import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventUtilService } from '@zsport/api';

import { EventUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: EventUtilService,
            useClass: EventUtilServiceImpl,
        },
    ],
})
export class DomainSportEventUtilModule {}
