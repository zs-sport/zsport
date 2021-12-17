import { NgModule } from '@angular/core';
import { CoreEntityQuantityDataModule } from '@zsport/core/entity-quantity/data';
import { CoreEntityQuantityStoreModule } from '@zsport/core/entity-quantity/store';
import { CoreEntityQuantityUtilModule } from '@zsport/core/entity-quantity/util';

@NgModule({
    exports: [CoreEntityQuantityDataModule, CoreEntityQuantityStoreModule, CoreEntityQuantityUtilModule],
    imports: [CoreEntityQuantityDataModule, CoreEntityQuantityStoreModule, CoreEntityQuantityUtilModule],
})
export class CoreEntityQuantityWrapperModule {}
