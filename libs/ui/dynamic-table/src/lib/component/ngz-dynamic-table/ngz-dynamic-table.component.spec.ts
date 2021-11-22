import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { RouterModule } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { I18nService } from '@zsport/api';
import { CoreI18nModule } from '@zsport/core/i18n';

import { NgzDynamicTableComponent } from './ngz-dynamic-table.component';

describe('NgzDynamicTableComponent', () => {
    let spectator: Spectator<NgzDynamicTableComponent>;

    const createComponent = createComponentFactory({
        component: NgzDynamicTableComponent,
        imports: [NzTableModule, NzIconModule, NzToolTipModule, RouterModule, CoreI18nModule],
        providers: [
            {
                provide: I18nService,
                useValue: {
                    getActiveLangAsString: () => {},
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
