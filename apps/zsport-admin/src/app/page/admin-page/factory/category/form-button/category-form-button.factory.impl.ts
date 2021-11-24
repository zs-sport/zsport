import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    AuthorizationService,
    ButtonBase,
    CategoryEntity,
    CategoryStateService,
    Entity,
    I18nService,
} from '@zsport/api';
import { CategoryFormButtonFactory } from '@zsport/domain/sport/category/form';

import { AdminCategoryPermissionsService } from '../../../../../permission/category';

@Injectable()
export class CategoryFormButtonFactoryImpl extends CategoryFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private categoryStateService: CategoryStateService,
        private i18nService: I18nService
    ) {
        super();
    }

    public createFormButtons(category: CategoryEntity): ButtonBase[] {
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
                            const updatedCategory: CategoryEntity = this.updateArticle(category, value);

                            this.categoryStateService.dispatchUpdateEntityAction(updatedCategory);
                        } else {
                            this.categoryStateService.dispatchAddEntityAction(value as CategoryEntity);
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
        const hasCreateCategoryEntityPermission = this.authorizationService.hasPermission(
            AdminCategoryPermissionsService.createCategoryEntity
        );

        const hasUpdateCategoryEntityPermission = this.authorizationService.hasPermission(
            AdminCategoryPermissionsService.updateCategoryEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreateCategoryEntityPermission ||
            hasUpdateCategoryEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }

    private updateArticle(category: CategoryEntity, value: Entity) {
        const updatedNameI18n: any = { ...category?.nameI18n };

        updatedNameI18n[this.i18nService.getActiveLangAsString()] = (value as CategoryEntity).nameI18n;

        const updatedCategory: CategoryEntity = {
            ...(value as CategoryEntity),
            nameI18n: updatedNameI18n,
        };

        return updatedCategory;
    }
}
