import { TestBed } from '@angular/core/testing';

import { EventFormService } from './event-form.service';

describe('EventFormService', () => {
    let service: EventFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventFormService],
        });

        service = TestBed.inject(EventFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
