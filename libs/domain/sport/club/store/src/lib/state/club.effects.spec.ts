import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { ClubEffects } from './club.effects';

describe('ClubEffects', () => {
    let actions$: Observable<any>;
    let effects: ClubEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [ClubEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(ClubEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
