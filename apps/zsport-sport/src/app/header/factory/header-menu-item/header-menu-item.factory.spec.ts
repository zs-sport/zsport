import { TestBed } from '@angular/core/testing';

import { HeaderMenuItemFactoryImpl } from './header-menu-item.factory.impl';

describe('HeaderMenuItemFactoryImpl', () => {
    let service: HeaderMenuItemFactoryImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HeaderMenuItemFactoryImpl]
        });

        service = TestBed.inject(HeaderMenuItemFactoryImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
