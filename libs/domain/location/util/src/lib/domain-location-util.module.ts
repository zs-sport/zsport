import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationUtilService } from '@zsport/api';

import { LocationUtilServiceImpl } from './service/location-util.service.impl';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: LocationUtilService,
            useClass: LocationUtilServiceImpl,
        },
    ],
})
export class DomainLocationUtilModule {}
