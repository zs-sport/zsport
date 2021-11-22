import { TestBed } from '@angular/core/testing';

import { ZsportAdminHeaderMenuItemFactoryImpl } from './zsport-admin-header-menu-item.factory.impl';

describe('ZsportAdminHeaderMenuItemFactoryImpl', () => {
    let service: ZsportAdminHeaderMenuItemFactoryImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ZsportAdminHeaderMenuItemFactoryImpl],
        });

        service = TestBed.inject(ZsportAdminHeaderMenuItemFactoryImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
