import { TestBed } from '@angular/core/testing';

import { EventCompetitionFormService } from './event-competition-form.service';

describe('EventCompetitionFormService', () => {
    let service: EventCompetitionFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventCompetitionFormService],
        });

        service = TestBed.inject(EventCompetitionFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
