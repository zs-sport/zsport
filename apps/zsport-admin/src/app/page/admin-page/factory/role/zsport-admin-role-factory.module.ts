import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    RoleFormButtonFactory,
    RoleFormConfigFactory,
    RoleFormControlFactory,
    RoleFormFactory,
} from '@zsport/domain/role/form';
import { RoleTableFactory } from '@zsport/domain/role/table';

import { ZsportAdminRoleFormFactoryImpl } from './form';
import { ZsportAdminRoleFormButtonFactoryImpl } from './form-button';
import { ZsportAdminRoleFormConfigFactoryImpl } from './form-config';
import { ZsportAdminRoleFormControlFactoryImpl } from './form-control';
import { ZsportAdminRoleTableFactoryImpl } from './table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: RoleFormButtonFactory,
            useClass: ZsportAdminRoleFormButtonFactoryImpl,
        },
        {
            provide: RoleFormConfigFactory,
            useClass: ZsportAdminRoleFormConfigFactoryImpl,
        },
        {
            provide: RoleFormControlFactory,
            useClass: ZsportAdminRoleFormControlFactoryImpl,
        },
        {
            provide: RoleFormFactory,
            useClass: ZsportAdminRoleFormFactoryImpl,
        },
        {
            provide: RoleTableFactory,
            useClass: ZsportAdminRoleTableFactoryImpl,
        },
    ],
})
export class ZsportAdminRoleFactoryModule {}
