import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthorizationService, ButtonBase, EventEntity, EventStateService, I18nService } from '@zsport/api';
import { EventFormButtonFactory } from '@zsport/domain/sport/event/form';

import { AdminEventPermissionsService } from '../../../../../permission/event';

@Injectable()
export class EventFormButtonFactoryImpl extends EventFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private eventStateService: EventStateService,
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
                    (value: EventEntity) => {
                        if (value.uid) {
                            this.eventStateService.dispatchUpdateEntityAction(value);
                        } else {
                            this.eventStateService.dispatchAddEntityAction(value);
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
        const hasCreateEventEntityPermission = this.authorizationService.hasPermission(
            AdminEventPermissionsService.createEventEntity
        );

        const hasUpdateEventEntityPermission = this.authorizationService.hasPermission(
            AdminEventPermissionsService.updateEventEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreateEventEntityPermission ||
            hasUpdateEventEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
