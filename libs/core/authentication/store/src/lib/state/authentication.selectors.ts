import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTHENTICATION_FEATURE_KEY } from '@zsport/api';

import { AuthenticationPartialState, AuthenticationState } from './authentication.reducer';

export const selectAuthenticationState = createFeatureSelector<AuthenticationPartialState, AuthenticationState>(
    AUTHENTICATION_FEATURE_KEY
);

export const selectAuthenticatedUser = createSelector(
    selectAuthenticationState,
    (state: AuthenticationState) => state.authenticatedUser
);

export const selectIsAuthenticated = createSelector(
    selectAuthenticationState,
    (state: AuthenticationState) => !!state.authenticatedUser?.uid
);

export const selectLoading = (state: AuthenticationPartialState) => state.authentication.loading;
