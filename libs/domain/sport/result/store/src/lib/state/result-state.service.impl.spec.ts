import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ResultStateServiceImpl } from './result-state.service.impl';

describe('ResultStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [ResultStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: ResultStateServiceImpl = TestBed.inject(ResultStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
