import { TestBed } from '@angular/core/testing';

import { PeriodUtilServiceImpl } from './period-util.service.impl';

describe('PeriodUtilService', () => {
    let service: PeriodUtilServiceImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PeriodUtilServiceImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
