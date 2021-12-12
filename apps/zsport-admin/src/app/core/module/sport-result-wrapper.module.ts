import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainSportResultDataModule } from '@zsport/domain/sport/result/data';
import { DomainSportResultStoreModule } from '@zsport/domain/sport/result/store';
import { DomainSportResultUtilModule } from '@zsport/domain/sport/result/util';

@NgModule({
    exports: [DomainSportResultDataModule, DomainSportResultStoreModule, DomainSportResultUtilModule],
    imports: [CommonModule, DomainSportResultDataModule, DomainSportResultStoreModule, DomainSportResultUtilModule],
})
export class SportResultWrapperModule {}
