import { TestBed } from '@angular/core/testing';

import { LocationTableService } from './location-table.service';

describe('LocationTableService', () => {
    let service: LocationTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(LocationTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
