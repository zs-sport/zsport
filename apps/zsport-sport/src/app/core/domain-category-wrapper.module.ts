import { NgModule } from '@angular/core';
import { DomainSportCategoryDataModule } from '@zsport/domain/sport/category/data';
import { DomainSportCategoryStoreModule } from '@zsport/domain/sport/category/store';
import { DomainSportCategoryUtilModule } from '@zsport/domain/sport/category/util';

@NgModule({
    declarations: [],
    exports: [DomainSportCategoryDataModule, DomainSportCategoryStoreModule, DomainSportCategoryUtilModule],
    imports: [DomainSportCategoryDataModule, DomainSportCategoryStoreModule, DomainSportCategoryUtilModule],
})
export class DomainCategoryWrapperModule {}
