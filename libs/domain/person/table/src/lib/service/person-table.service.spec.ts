import { TestBed } from '@angular/core/testing';

import { PersonTableService } from './person-table.service';

describe('PersonTableService', () => {
    let service: PersonTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(PersonTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
