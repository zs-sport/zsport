import { TestBed } from '@angular/core/testing';

import { I18nUtilImpl } from './i18n-util.impl';

describe('I18nUtilService', () => {
    let service: I18nUtilImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(I18nUtilImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
