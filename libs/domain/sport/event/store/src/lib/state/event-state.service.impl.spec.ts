import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { EventStateServiceImpl } from './event-state.service.impl';

describe('EventStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [EventStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: EventStateServiceImpl = TestBed.inject(EventStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
