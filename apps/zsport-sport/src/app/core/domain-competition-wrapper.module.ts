import { NgModule } from '@angular/core';
import { DomainSportCompetitionDataModule } from '@zsport/domain/sport/competition/data';
import { DomainSportCompetitionStoreModule } from '@zsport/domain/sport/competition/store';
import { DomainSportCompetitionUtilModule } from '@zsport/domain/sport/competition/util';

@NgModule({
    declarations: [],
    exports: [DomainSportCompetitionDataModule, DomainSportCompetitionStoreModule, DomainSportCompetitionUtilModule],
    imports: [DomainSportCompetitionDataModule, DomainSportCompetitionStoreModule, DomainSportCompetitionUtilModule],
})
export class DomainCompetitionWrapperModule {}
