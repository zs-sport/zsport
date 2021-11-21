import { forkJoin, Observable, of } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
    AuthenticationStateService,
    AuthorizationService,
    I18nService,
    RoleDataService,
    RoleEntity,
    UserDataService,
    UserEntity,
    UserHookService,
    UserModel,
} from '@zsport/api';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
    public constructor(
        private actions$: Actions,
        private authenticationService: AuthenticationStateService,
        private authorizationService: AuthorizationService,
        private i18NService: I18nService,
        private roleDataService: RoleDataService,
        private userDataService: UserDataService,
        private userHookService: UserHookService
    ) {}

    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.addUser),
            switchMap((action) =>
                this.userDataService.add$(this.convertUserToUserModel(action.user)).pipe(
                    switchMap((model) => this.convertUserModelToUser(model as UserModel)),
                    map((user) => {
                        return UserActions.addUserSuccess({ user });
                    }),
                    catchError((error) => {
                        return of(UserActions.addUserFail({ error }));
                    })
                )
            )
        )
    );
    loadExistedUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadExistedUser),
            switchMap((action) =>
                this.userDataService.load$(action.user.uid || '').pipe(
                    switchMap((model) => this.convertUserModelToUser(model as UserModel)),
                    map((user) => {
                        if (user && user.uid) {
                            this.authorizationService.addRoles(user.roles as RoleEntity[]);

                            this.authenticationService.dispatchAuthenticated(user);

                            this.userHookService.loadEntity(user);

                            return UserActions.loadExistedUserSuccess({ user });
                        } else {
                            return UserActions.addUser({ user: action.user as UserEntity });
                        }
                    }),
                    catchError((error) => {
                        return of(UserActions.loadExistedUserFail({ error }));
                    })
                )
            )
        )
    );
    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUser),
            switchMap((action) =>
                this.userDataService.load$(action.uid).pipe(
                    switchMap((model) => this.convertUserModelToUser(model as UserModel)),
                    map((user) => {
                        return UserActions.loadUserSuccess({ user });
                    }),
                    catchError((error) => {
                        return of(UserActions.loadUserFail({ error }));
                    })
                )
            )
        )
    );
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers),
            switchMap((action) =>
                this.userDataService.list$().pipe(
                    switchMap((models) => {
                        const models$: Observable<UserModel>[] = models.map((model) =>
                            this.convertUserModelToUser(model as UserModel).pipe(first())
                        );

                        return forkJoin(models$);
                    }),
                    map((users) => {
                        return UserActions.loadUsersSuccess({ users: users as UserEntity[] });
                    }),
                    catchError((error) => {
                        return of(UserActions.loadUsersFail({ error }));
                    })
                )
            )
        )
    );
    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.updateUser),
            switchMap((action) =>
                this.userDataService.update$(this.convertUserToUserModel(action.user)).pipe(
                    switchMap((userModel) => this.convertUserModelToUser(userModel as UserModel)),
                    map((user) => {
                        return UserActions.updateUserSuccess({
                            user: { changes: { ...user }, id: (user && user.uid) || '' },
                        });
                    }),
                    catchError((error) => {
                        return of(UserActions.loadUserFail({ error }));
                    })
                )
            )
        )
    );

    private convertUserModelToUser(userModel: UserModel): Observable<UserEntity> {
        if (userModel) {
            const user = {
                ...userModel,
            };

            user.roles = [];

            if (userModel.roleIds && userModel.roleIds.length > 0) {
                return this.roleDataService.listByIds$(userModel.roleIds).pipe(
                    switchMap((roles) => {
                        user.roles = roles;

                        return of(user);
                    })
                );
            } else {
                return of(user);
            }
        } else {
            return of({ uid: '' });
        }
    }

    private convertUserToUserModel(user: UserEntity): UserModel {
        const userModel: UserModel = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            firstName: user.firstName,
            language: user.language || this.i18NService.getActiveLangAsString(),
            lastName: user.lastName,
            phone: user.phone,
            photoURL: user.photoURL || '',
            roleIds: [],
        };

        if (user.roles) {
            userModel.roleIds = user.roles.map((role) => role.uid || '');
        }

        return userModel;
    }
}
