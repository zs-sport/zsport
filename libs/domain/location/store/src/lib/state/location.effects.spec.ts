import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { LocationEffects } from './location.effects';

fdescribe('LocationEffects', () => {
    let actions$: Observable<any>;
    let effects: LocationEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [LocationEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(LocationEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
