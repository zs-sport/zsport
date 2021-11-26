import { TestBed } from '@angular/core/testing';

import { TeamTableService } from './team-table.service';

describe('TeamTableService', () => {
    let service: TeamTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(TeamTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
