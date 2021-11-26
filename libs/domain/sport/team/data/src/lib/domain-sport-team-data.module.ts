import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeamDataService } from '@zsport/api';

import { TeamDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: TeamDataService,
            useClass: TeamDataServiceImpl,
        },
    ],
})
export class DomainSportTeamDataModule {}
