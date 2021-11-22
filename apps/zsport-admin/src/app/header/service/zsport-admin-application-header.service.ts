import { Observable, of, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AuthenticationStateService, UserEntity } from '@zsport/api';
import { HeaderMenuItemFactory, HeaderMenuModeEnum, HeaderMenuThemeEnum, UserProfileItemFactory } from '@zsport/shared';

import { ZsportAdminApplicationHeaderBase } from '../base';

@Injectable()
export class ZsportAdminApplicationHeaderService extends ZsportAdminApplicationHeaderBase {
    public constructor(
        public authenticationStateService: AuthenticationStateService,
        public headerMenuItemFactory: HeaderMenuItemFactory,
        public userProfileItemFactory: UserProfileItemFactory
    ) {
        super();
    }

    public init$(params$$: Subject<any>): Observable<boolean> {
        this.params$$ = params$$;

        this.authenticationStateService.dispatchGetUser();

        return this.authenticationStateService.selectAuthenticatedUser$().pipe(
            map((user) => {
                this.params$$.next({
                    avatarUrl: (user as UserEntity).photoURL,
                    displayName: (user as UserEntity).displayName,
                    isAuthenticatedUser: !!(user && user.uid),
                    menuItems: this.headerMenuItemFactory.createMenuItems(),
                    menuMode: HeaderMenuModeEnum.horizontal,
                    menuTheme: HeaderMenuThemeEnum.dark,
                    userProfileItems: this.userProfileItemFactory.createProfileItems(user as UserEntity),
                });
            }),
            switchMap(() => of(true))
        );
    }

    public logIn(): void {
        this.authenticationStateService.dispatchGoogleLogin();
    }

    public logOut(): void {
        this.authenticationStateService.dispatchLogout();
    }
}
