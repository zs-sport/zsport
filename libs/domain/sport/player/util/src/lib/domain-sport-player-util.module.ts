import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayerUtilService, PositionUtilService, StatusUtilService } from '@zsport/api';

import { PlayerUtilServiceImpl, PositionUtilServiceImpl, StatusUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PlayerUtilService,
            useClass: PlayerUtilServiceImpl,
        },
        {
            provide: PositionUtilService,
            useClass: PositionUtilServiceImpl,
        },
        {
            provide: StatusUtilService,
            useClass: StatusUtilServiceImpl,
        },
    ],
})
export class DomainSportPlayerUtilModule {}
