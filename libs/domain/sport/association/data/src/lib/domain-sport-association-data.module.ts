import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssociationDataService } from '@zsport/api';

import { AssociationDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: AssociationDataService,
            useClass: AssociationDataServiceImpl,
        },
    ],
})
export class DomainSportAssociationDataModule {}
