import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    UserFormButtonFactory,
    UserFormConfigFactory,
    UserFormControlFactory,
    UserFormFactory,
} from '@zsport/domain/user/form';
import { UserTableFactory } from '@zsport/domain/user/table';

import { ZsportAdminUserFormFactoryImpl } from './user-form';
import { ZsportAdminUserFormButtonFactoryImpl } from './user-form-button';
import { ZsportAdminUserFormConfigFactoryImpl } from './user-form-config';
import { ZsportAdminUserFormControlFactoryImpl } from './user-form-control';
import { ZsportAdminUserTableFactoryImpl } from './user-table';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: UserFormButtonFactory,
            useClass: ZsportAdminUserFormButtonFactoryImpl,
        },
        {
            provide: UserFormConfigFactory,
            useClass: ZsportAdminUserFormConfigFactoryImpl,
        },
        {
            provide: UserFormControlFactory,
            useClass: ZsportAdminUserFormControlFactoryImpl,
        },
        {
            provide: UserFormFactory,
            useClass: ZsportAdminUserFormFactoryImpl,
        },
        {
            provide: UserTableFactory,
            useClass: ZsportAdminUserTableFactoryImpl,
        },
    ],
})
export class ZsportAdminUserFactoryModule {}
