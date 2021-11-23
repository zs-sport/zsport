import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssociationUtilService } from '@zsport/api';

import { AssociationUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: AssociationUtilService,
            useClass: AssociationUtilServiceImpl,
        },
    ],
})
export class DomainSportAssociationUtilModule {}
