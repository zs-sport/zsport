import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainSportPeriodUtilModule } from '@zsport/domain/sport/period/util';

@NgModule({
    exports: [DomainSportPeriodUtilModule],
    imports: [CommonModule, DomainSportPeriodUtilModule],
})
export class SportPeriodWrapperModule {}
