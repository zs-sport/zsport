import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService, ButtonBase, Entity, I18nService, Result, ResultStateService } from '@zsport/api';
import { ResultAdminPermissionsService } from '@zsport/domain/sport/result/admin';
import { ResultFormButtonFactory } from '@zsport/domain/sport/result/form';

@Injectable()
export class ResultFormButtonFactoryImpl extends ResultFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private activatedRoute: ActivatedRoute,
        private authorizationService: AuthorizationService,
        private resultStateService: ResultStateService,
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
            const clubId: string = this.activatedRoute.snapshot.queryParams.clubId;

            buttons.splice(
                0,
                0,
                this.createSubmitButton(
                    (value: Entity) => {
                        if (value.uid) {
                            this.resultStateService.dispatchUpdateEntityAction(value as Result);
                        } else {
                            this.resultStateService.dispatchAddEntityAction(value as Result);
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
        const hasCreateResultEntityPermission = this.authorizationService.hasPermission(
            ResultAdminPermissionsService.createResultEntity
        );

        const hasUpdateResultEntityPermission = this.authorizationService.hasPermission(
            ResultAdminPermissionsService.updateResultEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreateResultEntityPermission ||
            hasUpdateResultEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
