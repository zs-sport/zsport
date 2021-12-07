import { TestBed } from '@angular/core/testing';

import { ResultDataServiceImpl } from './result-data.service.impl';

describe('ResultDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ResultDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: ResultDataServiceImpl = TestBed.inject(ResultDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
