import { TestBed } from '@angular/core/testing';

import { ResultUtilServiceImpl } from './result-util.service.impl';

describe('ResultUtilService', () => {
    let service: ResultUtilServiceImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ResultUtilServiceImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
