import { TestBed } from '@angular/core/testing';

import { LocationUtilServiceImpl } from './location-util.service.impl';

describe('LocationUtilServiceImpl', () => {
    let service: LocationUtilServiceImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocationUtilServiceImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
