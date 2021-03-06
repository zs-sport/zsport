import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorizationService, ButtonBase, I18nService, RoleNames, UserModel, UserStateService } from '@zsport/api';
import { UserFormButtonFactory } from '@zsport/domain/user/form';

import { ZsportAdminAdminUserPermissionsService } from '../../../../../permission/user';

@Injectable()
export class ZsportAdminUserFormButtonFactoryImpl extends UserFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private userStateService: UserStateService,
        private i18nService: I18nService
    ) {
        super();
    }

    public createFormButtons(): ButtonBase[] {
        const buttons: ButtonBase[] = [
            this.createResetButton(
                (formGroup: FormGroup) => {
                    formGroup.reset();
                },
                2,
                this.i18nService.translate('admin.user.reset')
            ),
            this.createCancelButton(
                () => {
                    this.navigateBack();
                },
                3,
                this.i18nService.translate('admin.user.cancel')
            ),
        ];

        if (this.hasCreateOrUpdateEntityPermission()) {
            buttons.splice(
                0,
                0,
                this.createSubmitButton(
                    (value: UserModel) => {
                        if (value.uid) {
                            this.userStateService.dispatchUpdateEntityAction(value);
                        } else {
                            this.userStateService.dispatchAddEntityAction(value);
                        }

                        this.navigateBack();
                    },
                    1,
                    this.i18nService.translate('admin.user.submit')
                )
            );
        }

        return buttons;
    }

    private hasCreateOrUpdateEntityPermission(): boolean {
        const hasCreateUserEntityPermission = this.authorizationService.hasPermission(
            ZsportAdminAdminUserPermissionsService.createUserEntity
        );

        const hasUpdateUserEntityPermission = this.authorizationService.hasPermission(
            ZsportAdminAdminUserPermissionsService.updateUserEntity
        );

        const isUser = this.authorizationService.hasPermission('someSOME');

        return (
            this.authorizationService.hasRole(RoleNames.ADMIN) ||
            hasCreateUserEntityPermission ||
            hasUpdateUserEntityPermission ||
            isUser
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
