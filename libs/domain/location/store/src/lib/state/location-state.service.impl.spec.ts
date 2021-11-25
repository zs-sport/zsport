import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { LocationStateServiceImpl } from './location-state.service.impl';

describe('LocationStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [LocationStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: LocationStateServiceImpl = TestBed.inject(LocationStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
