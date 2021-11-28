import { TestBed } from '@angular/core/testing';

import { CompetitionDataServiceImpl } from './competition-data.service.impl';

describe('CompetitionDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [CompetitionDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: CompetitionDataServiceImpl = TestBed.inject(CompetitionDataServiceImpl);
        expect(service).toBeTruthy();
    });
});
