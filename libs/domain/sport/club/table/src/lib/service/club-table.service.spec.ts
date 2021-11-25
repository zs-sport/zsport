import { TestBed } from '@angular/core/testing';

import { ClubTableService } from './club-table.service';

describe('ClubTableService', () => {
    let service: ClubTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(ClubTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
