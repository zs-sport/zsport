import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { UserEntity } from '@zsport/api';

import * as UserActions from './user.actions';
import { UserEffects } from './user.effects';

describe('UserEffects', () => {
    let actions: any;
    let effects: UserEffects;

    const user: UserEntity = {
        displayName: 'Zsagia',
        email: 'zsagia@gmail.com',
        uid: '',
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NxModule.forRoot()],
            providers: [UserEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
        });

        effects = TestBed.inject(UserEffects);
    });

    describe('loadUser$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: UserActions.loadUser({ uid: '' }) });

            const expected = hot('-a-|', { a: UserActions.loadUserSuccess({ user }) });

            expect(effects.loadUser$).toBeObservable(expected);
        });
    });
});
