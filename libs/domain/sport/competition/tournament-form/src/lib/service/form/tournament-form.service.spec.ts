import { TestBed } from '@angular/core/testing';

import { TournamentFormService } from './tournament-form.service';

describe('TournamentFormService', () => {
    let service: TournamentFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TournamentFormService],
        });

        service = TestBed.inject(TournamentFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
