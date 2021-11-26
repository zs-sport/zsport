import { TestBed } from '@angular/core/testing';

import { TeamDataServiceImpl } from './team-data.service.impl';

describe('TeamDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [TeamDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: TeamDataServiceImpl = TestBed.inject(TeamDataServiceImpl);
        expect(service).toBeTruthy();
    });
});
