import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoleDataService } from '@zsport/api';

import { RoleDataServiceImpl } from './service';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: RoleDataService,
            useClass: RoleDataServiceImpl,
        },
    ],
})
export class DomainRoleDataModule {}
