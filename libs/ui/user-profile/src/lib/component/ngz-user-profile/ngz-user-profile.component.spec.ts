import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { NgzUserProfileComponent } from './ngz-user-profile.component';

describe('NgzUserProfileComponent', () => {
    let spectator: Spectator<NgzUserProfileComponent>;

    const createComponent = createComponentFactory({
        component: NgzUserProfileComponent,
        imports: [HttpClientTestingModule, NzAvatarModule, NzIconModule, NzMenuModule, NzPopoverModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
