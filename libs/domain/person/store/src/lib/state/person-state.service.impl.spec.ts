import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { PersonStateServiceImpl } from './person-state.service.impl';

describe('PersonStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [PersonStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: PersonStateServiceImpl = TestBed.inject(PersonStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
