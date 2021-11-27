import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonDataService } from '@zsport/api';

import { PersonDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PersonDataService,
            useClass: PersonDataServiceImpl,
        },
    ],
})
export class DomainPersonDataModule {}
