import { TestBed } from '@angular/core/testing';
import { EventStateService } from '@zsport/api';

import { EventListResolverService } from './event-list-resolver.service';

describe('EventListResolverService', () => {
    let service: EventListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                EventListResolverService,
                {
                    provide: EventStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(EventListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
