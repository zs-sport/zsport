import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompetitionDataService } from '@zsport/api';

import { CompetitionDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CompetitionDataService,
            useClass: CompetitionDataServiceImpl,
        },
    ],
})
export class DomainSportCompetitionDataModule {}
