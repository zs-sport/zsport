import { Location } from '@angular/common';
import { EventEmitter, Injectable, Optional } from '@angular/core';
import { AuthorizationService, ButtonBase, Entity, Event, EventEntity, I18nService } from '@zsport/api';
import { EventCompetitionFormButtonFactory } from '@zsport/domain/sport/event/competition-form';

import { AdminCompetitionEventPermissionsService } from '../../../../../permission/competition-event';

@Injectable()
export class CompetitionEventFormButtonFactoryImpl extends EventCompetitionFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private i18nService: I18nService
    ) {
        super();
    }

    public createFormButtons(buttonUpdate: EventEmitter<Event>): ButtonBase[] {
        return [
            this.createSubmitButton(
                (value: Event) => {
                    buttonUpdate.next(value as EventEntity);
                },
                1,
                this.i18nService.translate('admin.form.submit')
            ),
        ];
    }

    private hasCreateOrUpdateEntityPermission(): boolean {
        const hasCreateEventEntityPermission = this.authorizationService.hasPermission(
            AdminCompetitionEventPermissionsService.createEventEntity
        );

        const hasUpdateEventEntityPermission = this.authorizationService.hasPermission(
            AdminCompetitionEventPermissionsService.updateEventEntity
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
