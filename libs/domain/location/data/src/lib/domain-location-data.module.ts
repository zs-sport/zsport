import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationDataService } from '@zsport/api';

import { LocationDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: LocationDataService,
            useClass: LocationDataServiceImpl,
        },
    ],
})
export class DomainLocationDataModule {}
