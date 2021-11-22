import { NzMenuModule } from 'ng-zorro-antd/menu';

import { RouterModule } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CoreI18nModule } from '@zsport/core/i18n';

import { NgzHeaderMenuComponent } from './ngz-header-menu.component';

describe('NgzHeaderMenuComponent', () => {
    let spectator: Spectator<NgzHeaderMenuComponent>;

    const createComponent = createComponentFactory({
        component: NgzHeaderMenuComponent,
        imports: [NzMenuModule, RouterModule, CoreI18nModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
