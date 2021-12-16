import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AuthenticationStateService, User } from '@zsport/api';
import {
    HeaderMenuItemFactory,
    HeaderMenuItemModel,
    HeaderMenuModeEnum,
    HeaderMenuThemeEnum,
    UserProfileItemFactory,
    UserProfileItemModel,
} from '@zsport/shared';
import { NgzApplicationHeaderComponent } from '@zsport/ui/application-header';

import { ApplicationHeaderBase } from '../base';

@Injectable()
export class ApplicationHeaderService extends ApplicationHeaderBase {
    public constructor(
        public authenticationStateService: AuthenticationStateService,
        public headerMenuItemFactory: HeaderMenuItemFactory,
        public userProfileItemFactory: UserProfileItemFactory
    ) {
        super();
    }

    public init$(dynamicInputs$$: Subject<any>): Observable<boolean> {
        this.dynamicInputs$$ = dynamicInputs$$;

        this.dynamicComponent$ = of(NgzApplicationHeaderComponent);
        this.dynamicOutputs$ = of({
            logIn: () => this.authenticationStateService.dispatchGoogleLogin(),
            logOut: () => this.authenticationStateService.dispatchLogout(),
        });

        const isAuthenticatedUser$$: Subject<boolean> = new ReplaySubject();
        const headerMenuItems$$: Subject<HeaderMenuItemModel[]> = new ReplaySubject();
        const userProfileItems$$: Subject<UserProfileItemModel[]> = new ReplaySubject();

        this.authenticationStateService.dispatchGetUser();

        return this.authenticationStateService.selectAuthenticatedUser$().pipe(
            map((user) => {
                this.dynamicInputs$$.next({
                    avatarUrl: (user as User).photoURL,
                    displayName: (user as User).displayName,
                    isAuthenticatedUser$: isAuthenticatedUser$$.asObservable(),
                    menuItems$: headerMenuItems$$.asObservable(),
                    menuMode: HeaderMenuModeEnum.horizontal,
                    menuTheme: HeaderMenuThemeEnum.dark,
                    userProfileItems$: userProfileItems$$.asObservable(),
                });

                isAuthenticatedUser$$.next(!!user?.uid);
                headerMenuItems$$.next(this.headerMenuItemFactory.createMenuItems());
                userProfileItems$$.next(this.userProfileItemFactory.createProfileItems(user as User));
            }),
            switchMap(() => of(true))
        );
    }
}
