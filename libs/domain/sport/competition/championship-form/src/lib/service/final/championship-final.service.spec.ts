import { TestBed } from '@angular/core/testing';

import { ChampionshipFinalService } from './championship-final.service';

describe('ChampionshipFinalService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ChampionshipFinalService = TestBed.get(ChampionshipFinalService);

        expect(service).toBeTruthy();
    });
});
