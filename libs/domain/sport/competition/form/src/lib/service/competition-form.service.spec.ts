import { TestBed } from '@angular/core/testing';

import { CompetitionFormService } from './competition-form.service';

describe('CompetitionFormService', () => {
    let service: CompetitionFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CompetitionFormService],
        });

        service = TestBed.inject(CompetitionFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
