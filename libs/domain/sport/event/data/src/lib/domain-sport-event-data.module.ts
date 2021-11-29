import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventDataService } from '@zsport/api';

import { EventDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: EventDataService,
            useClass: EventDataServiceImpl,
        },
    ],
})
export class DomainSportEventDataModule {}
