import { TestBed } from '@angular/core/testing';

import { EventDataServiceImpl } from './event-data.service.impl';

describe('EventDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [EventDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: EventDataServiceImpl = TestBed.inject(EventDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
