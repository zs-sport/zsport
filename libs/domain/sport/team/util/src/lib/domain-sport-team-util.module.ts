import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeamUtilService } from '@zsport/api';

import { TeamUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: TeamUtilService,
            useClass: TeamUtilServiceImpl,
        },
    ],
})
export class DomainSportTeamUtilModule {}
