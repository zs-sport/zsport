import { TestBed } from '@angular/core/testing';

import { EventEditResolverService } from './event-edit-resolver.service';

describe('EventEditResolverService', () => {
    let service: EventEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EventEditResolverService],
        });

        service = TestBed.inject(EventEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
