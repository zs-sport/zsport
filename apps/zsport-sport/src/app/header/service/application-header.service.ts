import { combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AuthenticationStateService, EntityQuantity, EntityQuantityStateService, User } from '@zsport/api';
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
        private entityQuantityStateService: EntityQuantityStateService,
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

        return combineLatest([
            this.authenticationStateService.selectAuthenticatedUser$(),
            this.entityQuantityStateService.selectEntities$(),
        ]).pipe(
            map(([user, entityQuantities]) => {
                this.dynamicInputs$$.next({
                    avatarUrl: (user as User).photoURL,
                    displayName: (user as User).displayName,
                    entityQuantities: entityQuantities as EntityQuantity[],
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
