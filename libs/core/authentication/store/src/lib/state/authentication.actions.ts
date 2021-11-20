import { createAction, props } from '@ngrx/store';
import { UserEntity } from '@zsport/api';

export const getUser = createAction('[Auth] Get User');

export const authenticated = createAction('[Auth] Authenticated', props<{ user: UserEntity }>());

export const notAuthenticated = createAction('[Auth] Not Authenticated');

export const googleLogin = createAction('[Auth] Google Login Attempt');

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const authError = createAction('[Auth] Error', props<{ error: string }>());
