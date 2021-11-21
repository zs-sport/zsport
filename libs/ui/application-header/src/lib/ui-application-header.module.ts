import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreAuthenticationViewModule } from '@zsport/core/authentication/view';
import { CoreI18nModule } from '@zsport/core/i18n';
import { UiHeaderMenuModule } from '@zsport/ui/header-menu';
import { UiUserProfileModule } from '@zsport/ui/user-profile';

import { NgzApplicationHeaderComponent } from './component/ngz-application-header';

@NgModule({
    imports: [
        CommonModule,
        CoreAuthenticationViewModule,
        NzAvatarModule,
        NzGridModule,
        NzIconModule,
        CoreI18nModule,
        UiHeaderMenuModule,
        UiUserProfileModule,
    ],
    declarations: [NgzApplicationHeaderComponent],
    exports: [NgzApplicationHeaderComponent],
})
export class UiApplicationHeaderModule {}
