import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthenticationStateService, UserEntity } from '@zsport/api';

import * as authenticationActions from './authentication.actions';
import { AuthenticationPartialState } from './authentication.reducer';
import * as authenticationSelectors from './authentication.selectors';

@Injectable()
export class AuthenticationStateServiceImpl extends AuthenticationStateService {
    public constructor(private store: Store<AuthenticationPartialState>) {
        super();
    }

    public dispatchAuthenticated(user: UserEntity): void {
        this.store.dispatch(authenticationActions.authenticated({ user }));
    }

    public dispatchGetUser(): void {
        this.store.dispatch(authenticationActions.getUser());
    }

    public dispatchGoogleLogin(): void {
        this.store.dispatch(authenticationActions.googleLogin());
    }

    public dispatchLogout(): void {
        this.store.dispatch(authenticationActions.logout());
    }

    public selectAuthenticatedUser$(): Observable<UserEntity | null> {
        return this.store.pipe(select(authenticationSelectors.selectAuthenticatedUser));
    }

    public selectIsAuthenticated$(): Observable<boolean> {
        return this.store.pipe(select(authenticationSelectors.selectIsAuthenticated));
    }
}
