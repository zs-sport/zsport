import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { TeamEffects } from './team.effects';

describe('SportTeamEffects', () => {
    let actions$: Observable<any>;
    let effects: TeamEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [TeamEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(TeamEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
