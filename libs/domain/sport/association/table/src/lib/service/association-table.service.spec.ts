import { TestBed } from '@angular/core/testing';

import { AssociationTableService } from './association-table.service';

describe('AssociationTableService', () => {
    let service: AssociationTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(AssociationTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
