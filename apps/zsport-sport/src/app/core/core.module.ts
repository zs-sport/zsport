import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserHookService } from '@zsport/api';
import { CoreAuthenticationStoreModule } from '@zsport/core/authentication/store';
import { CoreAuthenticationViewModule } from '@zsport/core/authentication/view';

import { CoreAuthorizationWrapperModule } from './core-authorization-wrapper.module';
import { DomainRoleWrapperModule } from './domain-role-wrapper.module';
import { DomainUserWrapperModule } from './domain-user-wrapper.module';
import { CoreEntityQuantityWrapperModule } from './entity-quantity-wrapper.module';
import { DefaultUserHookService } from './hook/user';

@NgModule({
    exports: [CoreAuthenticationStoreModule, CoreAuthenticationViewModule],
    imports: [
        CommonModule,
        CoreAuthenticationStoreModule,
        CoreAuthenticationViewModule,
        CoreAuthorizationWrapperModule,
        CoreEntityQuantityWrapperModule,
        DomainRoleWrapperModule,
        DomainUserWrapperModule,
    ],
    providers: [
        {
            provide: UserHookService,
            useClass: DefaultUserHookService,
        },
    ],
})
export class CoreModule {}
