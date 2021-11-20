import { TestBed } from '@angular/core/testing';

import { NgneatI18nService } from './ngneat-i18n.service';

describe('NgneatI18nService', () => {
    let service: NgneatI18nService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NgneatI18nService],
        });
        service = TestBed.inject(NgneatI18nService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
