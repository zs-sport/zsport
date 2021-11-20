import firebase from 'firebase/compat/app';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseService, I18nService, UserModel, UserStateService } from '@zsport/api';

import * as authenticationActions from './authentication.actions';

@Injectable()
export class AuthenticationEffects extends BaseService {
    getAuthenticatedUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authenticationActions.getUser),
            switchMap(() => this.afAuth.authState),
            mergeMap((authData) => {
                const actions = [];

                if (authData) {
                    const user: UserModel = {
                        displayName: authData.displayName,
                        email: authData.email,
                        firstName: '',
                        lastName: '',
                        language: this.i18NService.getActiveLangAsString(),
                        phone: '',
                        photoURL: authData.photoURL,
                        roleIds: [],
                        uid: authData.uid,
                    };

                    this.userStateService.dispatchLoadExistedUserAction(user);
                } else {
                    actions.push(authenticationActions.notAuthenticated());
                }

                return actions;
            }),
            catchError((err) => of(authenticationActions.authError({ error: err.message })))
        )
    );
    public login = createEffect(() =>
        this.actions$.pipe(
            ofType(authenticationActions.googleLogin),
            switchMap(() => {
                return of(this.googleLogin());
            }),
            map(() => {
                return authenticationActions.getUser();
            }),
            catchError((err) => {
                return of(authenticationActions.authError({ error: err.message }));
            })
        )
    );
    public logout = createEffect(() =>
        this.actions$.pipe(
            ofType(authenticationActions.logout),
            map(() => {
                this.afAuth.signOut();

                return authenticationActions.logoutSuccess();
            }),
            catchError((err) => of(authenticationActions.authError({ error: err.message })))
        )
    );

    public constructor(
        private actions$: Actions,
        private afAuth: AngularFireAuth,
        private i18NService: I18nService,
        private userStateService: UserStateService
    ) {
        super();
    }

    private googleLogin(): Promise<unknown> {
        const provider = new firebase.auth.GoogleAuthProvider();

        return this.afAuth.signInWithPopup(provider);
    }
}
