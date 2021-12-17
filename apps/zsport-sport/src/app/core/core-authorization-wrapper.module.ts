import { NgModule } from '@angular/core';
import { CoreAuthorizationDataModule } from '@zsport/core/authorization/data';

@NgModule({
    exports: [CoreAuthorizationDataModule],
    imports: [CoreAuthorizationDataModule],
})
export class CoreAuthorizationWrapperModule {}
