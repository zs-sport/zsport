import { DynamicModule } from 'ng-dynamic-component';

import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreI18nModule } from '@zsport/core/i18n';
import { HeaderMenuItemFactory, UserProfileItemFactory } from '@zsport/shared';
import { NgzApplicationHeaderComponent, UiApplicationHeaderModule } from '@zsport/ui/application-header';

import { ApplicationHeaderComponent } from './component';
import { HeaderMenuItemFactoryImpl } from './factory/header-menu-item';
import { UserProfileItemFactoryImpl } from './factory/user-profile-item';

@NgModule({
    declarations: [ApplicationHeaderComponent],
    entryComponents: [NgzApplicationHeaderComponent],
    exports: [ApplicationHeaderComponent],
    imports: [CommonModule, DynamicModule, CoreI18nModule, UiApplicationHeaderModule],
    providers: [
        {
            provide: HeaderMenuItemFactory,
            useClass: HeaderMenuItemFactoryImpl,
        },
        {
            provide: UserProfileItemFactory,
            useClass: UserProfileItemFactoryImpl,
        },
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HeaderModule {}
