import { NgModule } from '@angular/core';
import { DomainRoleDataModule } from '@zsport/domain/role/data';
import { DomainRoleStoreModule } from '@zsport/domain/role/store';

@NgModule({
    exports: [DomainRoleDataModule, DomainRoleStoreModule],
    imports: [DomainRoleDataModule, DomainRoleStoreModule],
})
export class DomainRoleWrapperModule {}
