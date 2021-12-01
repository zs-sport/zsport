import { TestBed } from '@angular/core/testing';

import { TournamentFinalService } from './tournament-final.service';

describe('TournamentFinalService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TournamentFinalService = TestBed.get(TournamentFinalService);

        expect(service).toBeTruthy();
    });
});
