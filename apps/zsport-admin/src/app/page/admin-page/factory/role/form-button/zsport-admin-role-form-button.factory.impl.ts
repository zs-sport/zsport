import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    AuthorizationService,
    ButtonBase,
    Entity,
    I18nService,
    RoleEntity,
    RoleNames,
    RoleStateService,
} from '@zsport/api';
import { RoleFormButtonFactory } from '@zsport/domain/role/form';

import { ZsportAdminAdminRolePermissionsService } from '../../../../../permission/role';

@Injectable()
export class ZsportAdminRoleFormButtonFactoryImpl extends RoleFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private roleStateService: RoleStateService,
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
                this.i18nService.translate('admin.form.reset')
            ),
            this.createCancelButton(
                () => {
                    this.navigateBack();
                },
                3,
                this.i18nService.translate('admin.form.cancel')
            ),
        ];

        if (this.hasCreateOrUpdateEntityPermission()) {
            buttons.splice(
                0,
                0,
                this.createSubmitButton(
                    (value: Entity) => {
                        if (value.uid) {
                            this.roleStateService.dispatchUpdateEntityAction(value as RoleEntity);
                        } else {
                            this.roleStateService.dispatchAddEntityAction(value as RoleEntity);
                        }

                        this.navigateBack();
                    },
                    1,
                    this.i18nService.translate('admin.form.submit')
                )
            );
        }

        return buttons;
    }

    private hasCreateOrUpdateEntityPermission(): boolean {
        const hasCreateRoleEntityPermission = this.authorizationService.hasPermission(
            ZsportAdminAdminRolePermissionsService.createRoleEntity
        );

        const hasUpdateRoleEntityPermission = this.authorizationService.hasPermission(
            ZsportAdminAdminRolePermissionsService.updateRoleEntity
        );

        return (
            this.authorizationService.hasRole(RoleNames.ADMIN) ||
            hasCreateRoleEntityPermission ||
            hasUpdateRoleEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
