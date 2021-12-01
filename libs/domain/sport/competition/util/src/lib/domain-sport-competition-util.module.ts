import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompetitionUtilService } from '@zsport/api';

import { OwnerNamePipe } from './pipe/owner-name.pipe';
import { CompetitionUtilServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: CompetitionUtilService,
            useClass: CompetitionUtilServiceImpl,
        },
    ],
    declarations: [OwnerNamePipe],
    exports: [OwnerNamePipe],
})
export class DomainSportCompetitionUtilModule {}
