import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClubDataService } from '@zsport/api';

import { ClubDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ClubDataService,
            useClass: ClubDataServiceImpl,
        },
    ],
})
export class DomainSportClubDataModule {}
