import { createReducer, on } from '@ngrx/store';
import { AUTHENTICATION_FEATURE_KEY, UserEntity } from '@zsport/api';

import * as authenticationActions from './authentication.actions';

export interface AuthenticationState {
    authenticatedUser: UserEntity | null;
    loading: boolean;
    error: string | null;
}

export interface AuthenticationPartialState {
    readonly [AUTHENTICATION_FEATURE_KEY]: AuthenticationState;
}

const defaultUser: UserEntity = { uid: null, displayName: 'GUEST', email: null, photoURL: null };

export const authenticationReducer = createReducer(
    { authenticatedUser: defaultUser, loading: false },
    on(authenticationActions.getUser, (state) => ({ ...state, loading: true })),
    on(authenticationActions.authenticated, (state, { user }) => ({
        ...state,
        authenticatedUser: user,
        loading: false,
    })),
    on(authenticationActions.notAuthenticated, (state) => {
        return {
            ...state,
            authenticatedUser: defaultUser,
            loading: false,
        };
    }),
    on(authenticationActions.logoutSuccess, (state) => {
        return {
            ...state,
            authenticatedUser: defaultUser,
            loading: false,
        };
    }),
    on(authenticationActions.googleLogin, (state) => ({ ...state, loading: true })),
    on(authenticationActions.authError, (state) => ({ ...state, authenticatedUser: defaultUser, loading: false }))
);
