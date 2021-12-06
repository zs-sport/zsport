import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompetitionQuantityService, CompetitionUtilService } from '@zsport/api';

import { OwnerNamePipe } from './pipe/owner-name.pipe';
import { CompetitionQuantityServiceImpl, CompetitionUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CompetitionQuantityService,
            useClass: CompetitionQuantityServiceImpl,
        },
        {
            provide: CompetitionUtilService,
            useClass: CompetitionUtilServiceImpl,
        },
    ],
    declarations: [OwnerNamePipe],
    exports: [OwnerNamePipe],
})
export class DomainSportCompetitionUtilModule {}
