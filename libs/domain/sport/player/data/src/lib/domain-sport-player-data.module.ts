import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayerDataService } from '@zsport/api';

import { PlayerDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PlayerDataService,
            useClass: PlayerDataServiceImpl,
        },
    ],
})
export class DomainSportPlayerDataModule {}
