import { TestBed } from '@angular/core/testing';

import { ZsportAdminI18nInitializer } from './zsport-admin-i18n.initializer';

describe('ZsportAdminI18nInitializer', () => {
    let service: any;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(ZsportAdminI18nInitializer);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
