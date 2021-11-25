import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorizationService, ButtonBase, ClubEntity, ClubStateService, I18nService } from '@zsport/api';
import { ClubFormButtonFactory } from '@zsport/domain/sport/club/form';

import { AdminClubPermissionsService } from '../../../../../permission/club';

@Injectable()
export class ClubFormButtonFactoryImpl extends ClubFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private sportClubStateService: ClubStateService,
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
                    (value: ClubEntity) => {
                        if (value.uid) {
                            this.sportClubStateService.dispatchUpdateEntityAction(value);
                        } else {
                            this.sportClubStateService.dispatchAddEntityAction(value);
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
        const hasCreateClubEntityPermission = this.authorizationService.hasPermission(
            AdminClubPermissionsService.createClubEntity
        );

        const hasUpdateClubEntityPermission = this.authorizationService.hasPermission(
            AdminClubPermissionsService.updateClubEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') || hasCreateClubEntityPermission || hasUpdateClubEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
