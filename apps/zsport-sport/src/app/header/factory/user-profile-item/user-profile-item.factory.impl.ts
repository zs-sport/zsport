import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationStateService, AuthorizationService, User } from '@zsport/api';
import { UserProfileItemFactory, UserProfileItemModel } from '@zsport/shared';

import { AdminPermissionsService } from '../../../permission/admin';

@Injectable()
export class UserProfileItemFactoryImpl extends UserProfileItemFactory {
    constructor(
        private authenticationStateService: AuthenticationStateService,
        private authorizationService: AuthorizationService,
        private router: Router
    ) {
        super();
    }

    public createProfileItems(user: User): UserProfileItemModel[] {
        const profileItemModels: UserProfileItemModel[] = [
            {
                actionHandler: () => {},
                icon: '',
                route: '/user/edit/' + user.uid,
                title: 'action.profile',
            },
            {
                title: 'action.logout',
                icon: '',
                actionHandler: () => {
                    this.authenticationStateService.dispatchLogout();

                    this.authorizationService.removeAll();

                    this.router.navigate(['/home']);
                },
            },
        ];

        const hasViewAdminPagePermission = this.authorizationService.hasPermission(
            AdminPermissionsService.viewAdminPage
        );

        if (this.authorizationService.hasRole('ADMIN') || hasViewAdminPagePermission) {
            profileItemModels.splice(1, 0, {
                title: 'action.admin',
                icon: '',
                route: '/admin',
            });
        }

        return profileItemModels;
    }
}
