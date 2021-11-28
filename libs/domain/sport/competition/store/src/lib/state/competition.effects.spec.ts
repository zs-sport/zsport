import { TestBed } from '@angular/core/testing';

import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CompetitionEffects } from './competition.effects';

describe('CompetitionEffects', () => {
    let actions$: Observable<any>;
    let effects: CompetitionEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CompetitionEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.get(CompetitionEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
