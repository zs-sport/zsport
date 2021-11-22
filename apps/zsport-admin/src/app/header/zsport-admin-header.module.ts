import { AngularSvgIconModule } from 'angular-svg-icon';
import { DynamicModule } from 'ng-dynamic-component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreAuthenticationViewModule } from '@zsport/core/authentication/view';
import { CoreI18nModule } from '@zsport/core/i18n';
import { HeaderMenuItemFactory, UserProfileItemFactory } from '@zsport/shared';
import { NgzApplicationHeaderComponent, UiApplicationHeaderModule } from '@zsport/ui/application-header';
import { UiUserProfileModule } from '@zsport/ui/user-profile';

import { ZsportAdminApplicationHeaderComponent } from './component';
import { ZsportAdminHeaderMenuItemFactoryImpl } from './factory/header-menu-item';
import { ZsportAdminUserProfileItemFactoryImpl } from './factory/user-profile-item';

@NgModule({
    declarations: [ZsportAdminApplicationHeaderComponent],
    entryComponents: [NgzApplicationHeaderComponent],
    exports: [ZsportAdminApplicationHeaderComponent],
    imports: [
        CommonModule,
        DynamicModule,
        CoreAuthenticationViewModule,
        CoreI18nModule,
        NzAvatarModule,
        NzGridModule,
        NzIconModule,
        NzMenuModule,
        UiApplicationHeaderModule,
        UiUserProfileModule,
        AngularSvgIconModule.forRoot(),
    ],
    providers: [
        {
            provide: HeaderMenuItemFactory,
            useClass: ZsportAdminHeaderMenuItemFactoryImpl,
        },
        {
            provide: UserProfileItemFactory,
            useClass: ZsportAdminUserProfileItemFactoryImpl,
        },
    ],
})
export class ZsportAdminHeaderModule {}
