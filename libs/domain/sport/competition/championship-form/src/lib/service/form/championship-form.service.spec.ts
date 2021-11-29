import { TestBed } from '@angular/core/testing';

import { ChampionshipFormService } from './championship-form.service';

describe('ChampionshipFormService', () => {
    let service: ChampionshipFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChampionshipFormService],
        });

        service = TestBed.inject(ChampionshipFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
