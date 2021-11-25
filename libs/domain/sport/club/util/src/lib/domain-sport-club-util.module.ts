import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClubUtilService } from '@zsport/api';

import { ClubUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: ClubUtilService,
            useClass: ClubUtilServiceImpl,
        },
    ],
})
export class DomainSportClubUtilModule {}
