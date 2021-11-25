import { TestBed } from '@angular/core/testing';

import { LocationDataServiceImpl } from './location-data.service.impl';

describe('LocationDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [LocationDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: LocationDataServiceImpl = TestBed.inject(LocationDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
