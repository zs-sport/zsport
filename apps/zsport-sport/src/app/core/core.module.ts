import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserHookService } from '@zsport/api';
import { CoreAuthenticationStoreModule } from '@zsport/core/authentication/store';
import { CoreAuthenticationViewModule } from '@zsport/core/authentication/view';
import { DomainSportClubDataModule } from '@zsport/domain/sport/club/data';
import { DomainSportResultUtilModule } from '@zsport/domain/sport/result/util';
import { StateUtilModule } from '@zsport/shared';

import { CoreAuthorizationWrapperModule } from './core-authorization-wrapper.module';
import { DomainCategoryWrapperModule } from './domain-category-wrapper.module';
import { DomainCompetitionWrapperModule } from './domain-competition-wrapper.module';
import { DomainEventWrapperModule } from './domain-event-wrapper.module';
import { DomainRoleWrapperModule } from './domain-role-wrapper.module';
import { DomainUserWrapperModule } from './domain-user-wrapper.module';
import { CoreEntityQuantityWrapperModule } from './entity-quantity-wrapper.module';
import { DefaultUserHookService } from './hook/user';

@NgModule({
    exports: [CoreAuthenticationStoreModule, DomainSportClubDataModule, CoreAuthenticationViewModule],
    imports: [
        CommonModule,
        CoreAuthenticationStoreModule,
        CoreAuthenticationViewModule,
        CoreAuthorizationWrapperModule,
        CoreEntityQuantityWrapperModule,
        DomainRoleWrapperModule,
        DomainCompetitionWrapperModule,
        DomainUserWrapperModule,
        DomainSportClubDataModule,
        DomainCategoryWrapperModule,
        DomainEventWrapperModule,
        StateUtilModule,
        DomainSportResultUtilModule,
    ],
    providers: [
        {
            provide: UserHookService,
            useClass: DefaultUserHookService,
        },
    ],
})
export class CoreModule {}
