import { Observable } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { ResultEffects } from './result.effects';

describe('ResultEffects', () => {
    let actions$: Observable<any>;
    let effects: ResultEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, StoreModule.forRoot({})],
            providers: [ResultEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(ResultEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
