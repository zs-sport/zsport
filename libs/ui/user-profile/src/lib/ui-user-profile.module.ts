import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreI18nModule } from '@zsport/core/i18n';

import { NgzUserProfileComponent } from './component/ngz-user-profile';

@NgModule({
    imports: [CommonModule, NzAvatarModule, NzIconModule, NzMenuModule, NzPopoverModule, RouterModule, CoreI18nModule],
    declarations: [NgzUserProfileComponent],
    exports: [NgzUserProfileComponent],
})
export class UiUserProfileModule {}
