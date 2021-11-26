import { Location as BrowserLocation } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    AuthorizationService,
    ButtonBase,
    Entity,
    I18nService,
    I18nText,
    LocationEntity,
    LocationStateService,
} from '@zsport/api';
import { LocationFormButtonFactory } from '@zsport/domain/location/form';

import { AdminLocationPermissionsService } from '../../../../../permission/location';

@Injectable()
export class LocationFormButtonFactoryImpl extends LocationFormButtonFactory {
    public constructor(
        @Optional() private browserLocation: BrowserLocation,
        private authorizationService: AuthorizationService,
        private locationStateService: LocationStateService,
        private i18nService: I18nService
    ) {
        super();
    }

    public createFormButtons(location: LocationEntity): ButtonBase[] {
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
                    (value: LocationEntity) => {
                        if (value.uid) {
                            const updatedLocation: LocationEntity = this.updateLocation(location, value);

                            this.locationStateService.dispatchUpdateEntityAction(updatedLocation);
                        } else {
                            this.locationStateService.dispatchAddEntityAction(this.addLocation(value));
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

    private addLocation(value: LocationEntity): LocationEntity {
        const updatedDescriptionI18n: any = {};

        updatedDescriptionI18n[this.i18nService.getActiveLangAsString()] = value.descriptionI18n;

        return {
            ...value,
            descriptionI18n: updatedDescriptionI18n,
        };
    }

    private hasCreateOrUpdateEntityPermission(): boolean {
        const hasCreateLocationEntityPermission = this.authorizationService.hasPermission(
            AdminLocationPermissionsService.createLocationEntity
        );

        const hasUpdateLocationEntityPermission = this.authorizationService.hasPermission(
            AdminLocationPermissionsService.updateLocationEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreateLocationEntityPermission ||
            hasUpdateLocationEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.browserLocation) {
            this.browserLocation.back();
        }
    }

    private updateLocation(location: LocationEntity, value: Entity) {
        const updatedDescriptionI18n: any = { ...location?.descriptionI18n };

        updatedDescriptionI18n[this.i18nService.getActiveLangAsString()] = (value as LocationEntity).descriptionI18n;

        const updatedLocation: LocationEntity = {
            ...(value as LocationEntity),
            descriptionI18n: updatedDescriptionI18n,
        };

        return updatedLocation;
    }
}
