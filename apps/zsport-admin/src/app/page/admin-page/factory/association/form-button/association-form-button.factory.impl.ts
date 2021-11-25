import { AdminAssociationPermissionsService } from '../../../../../permission/association';

import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    AssociationEntity,
    AssociationStateService,
    AuthorizationService,
    ButtonBase,
    Entity,
    I18nService,
} from '@zsport/api';
import { AssociationFormButtonFactory } from '@zsport/domain/sport/association/form';

@Injectable()
export class AssociationFormButtonFactoryImpl extends AssociationFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private sportAssociationStateService: AssociationStateService,
        private i18nService: I18nService
    ) {
        super();
    }

    public createFormButtons(sportAssociation: AssociationEntity): ButtonBase[] {
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
                            const updatedAssociation: AssociationEntity = this.updateArticle(sportAssociation, value);

                            this.sportAssociationStateService.dispatchUpdateEntityAction(updatedAssociation);
                        } else {
                            this.sportAssociationStateService.dispatchAddEntityAction(value as AssociationEntity);
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
        const hasCreateAssociationEntityPermission = this.authorizationService.hasPermission(
            AdminAssociationPermissionsService.createAssociationEntity
        );

        const hasUpdateAssociationEntityPermission = this.authorizationService.hasPermission(
            AdminAssociationPermissionsService.updateAssociationEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreateAssociationEntityPermission ||
            hasUpdateAssociationEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }

    private updateArticle(sportAssociation: AssociationEntity, value: Entity) {
        const updatedNameI18n: any = { ...sportAssociation.nameI18n };

        updatedNameI18n[this.i18nService.getActiveLangAsString()] = (value as AssociationEntity).nameI18n;

        const updatedAssociation: AssociationEntity = {
            ...(value as AssociationEntity),
            nameI18n: updatedNameI18n,
        };

        return updatedAssociation;
    }
}
