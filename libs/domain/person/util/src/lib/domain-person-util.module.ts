import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonUtilService } from '@zsport/api';

import { PersonUtilServiceImpl } from './service/person-util.service.impl';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PersonUtilService,
            useClass: PersonUtilServiceImpl,
        },
    ],
})
export class DomainPersonUtilModule {}
