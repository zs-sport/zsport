import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { PlayerEffects } from './player.effects';

describe('SportPlayerEffects', () => {
    let actions$: Observable<any>;
    let effects: PlayerEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [PlayerEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(PlayerEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
