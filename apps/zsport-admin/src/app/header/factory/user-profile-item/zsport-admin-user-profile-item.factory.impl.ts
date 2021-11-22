import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationStateService, AuthorizationService, RoleNames, UserEntity } from '@zsport/api';
import { UserProfileItemFactory, UserProfileItemModel } from '@zsport/shared';

import { ZsportAdminAdminPermissionsService } from '../../../permission/admin';

@Injectable()
export class ZsportAdminUserProfileItemFactoryImpl extends UserProfileItemFactory {
    constructor(
        private authenticationStateService: AuthenticationStateService,
        private authorizationService: AuthorizationService,
        private router: Router
    ) {
        super();
    }

    public createProfileItems(user: UserEntity): UserProfileItemModel[] {
        const profileItemModels: UserProfileItemModel[] = [
            {
                actionHandler: () => {},
                icon: 'profile',
                route: '/user/edit/' + user.uid,
                title: 'action.profile',
            },
            {
                actionHandler: () => {
                    this.authenticationStateService.dispatchLogout();

                    this.authorizationService.removeAll();

                    this.router.navigate(['/home']);
                },
                icon: 'logout',
                title: 'action.logout',
            },
        ];

        const hasViewAdminPagePermission = this.authorizationService.hasPermission(
            ZsportAdminAdminPermissionsService.viewAdminPage
        );

        if (this.authorizationService.hasRole(RoleNames.ADMIN) || hasViewAdminPagePermission) {
            profileItemModels.splice(1, 0, {
                icon: 'control',
                title: 'action.control',
                route: '/admin',
            });
        }

        return profileItemModels;
    }
}
