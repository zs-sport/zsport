import { TestBed } from '@angular/core/testing';

import { CompetitionTableService } from './competition-table.service';

describe('CompetitionTableService', () => {
    let service: CompetitionTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(CompetitionTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
