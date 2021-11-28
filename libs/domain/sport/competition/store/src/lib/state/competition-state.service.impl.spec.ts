import { inject, TestBed } from '@angular/core/testing';
import { CompetitionStateService } from '@zsport/api';

import { CompetitionStateServiceImpl } from './competition-state.service.impl';

describe('CompetitionStateService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: CompetitionStateService,
                    useClass: CompetitionStateServiceImpl,
                },
            ],
        });
    });

    it('should be created', inject([CompetitionStateService], (service: CompetitionStateService) => {
        expect(service).toBeTruthy();
    }));
});
