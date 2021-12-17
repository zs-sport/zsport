import { NgModule } from '@angular/core';
import { DomainUserDataModule } from '@zsport/domain/user/data';
import { DomainUserStoreModule } from '@zsport/domain/user/store';

@NgModule({
    declarations: [],
    exports: [DomainUserDataModule, DomainUserStoreModule],
    imports: [DomainUserDataModule, DomainUserStoreModule],
})
export class DomainUserWrapperModule {}
