import { TestBed } from '@angular/core/testing';

import { ClubDataServiceImpl } from './club-data.service.impl';

describe('ClubDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ClubDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: ClubDataServiceImpl = TestBed.inject(ClubDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
