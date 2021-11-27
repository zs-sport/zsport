import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorizationService, ButtonBase, Entity, I18nService, PersonEntity, PersonStateService } from '@zsport/api';
import { PersonFormButtonFactory } from '@zsport/domain/person/form';

import { AdminPersonPermissionsService } from '../../../../../permission/person';

@Injectable()
export class PersonFormButtonFactoryImpl extends PersonFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private personStateService: PersonStateService,
        private i18nService: I18nService
    ) {
        super();
    }

    public createFormButtons(person: PersonEntity): ButtonBase[] {
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
                    (value: PersonEntity) => {
                        if (value.uid) {
                            const updatedPerson: PersonEntity = this.updatePerson(person, value);

                            this.personStateService.dispatchUpdateEntityAction(updatedPerson);
                        } else {
                            this.personStateService.dispatchAddEntityAction(this.addPerson(value));
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

    private addPerson(value: PersonEntity): PersonEntity {
        const updatedNationalityI18n: any = {};

        updatedNationalityI18n[this.i18nService.getActiveLangAsString()] = value.nationalityI18n;

        return {
            ...value,
            nationalityI18n: updatedNationalityI18n,
        };
    }

    private hasCreateOrUpdateEntityPermission(): boolean {
        const hasCreatePersonEntityPermission = this.authorizationService.hasPermission(
            AdminPersonPermissionsService.createPersonEntity
        );

        const hasUpdatePersonEntityPermission = this.authorizationService.hasPermission(
            AdminPersonPermissionsService.updatePersonEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreatePersonEntityPermission ||
            hasUpdatePersonEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }

    private updatePerson(person: PersonEntity, value: Entity) {
        const updatedNationalityI18n: any = { ...person.nationalityI18n };

        updatedNationalityI18n[this.i18nService.getActiveLangAsString()] = (value as PersonEntity).nationalityI18n;

        const updatedPerson: PersonEntity = {
            ...(value as PersonEntity),
            nationalityI18n: updatedNationalityI18n,
        };

        return updatedPerson;
    }
}
