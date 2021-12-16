import { TestBed } from '@angular/core/testing';

import { ZssportI18nInitializer } from './zssport-i18n.initializer';

describe('ZssportI18nInitializer', () => {
    let service: any;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(ZssportI18nInitializer);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
