import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    AuthorizationService,
    ButtonBase,
    Competition,
    CompetitionStateService,
    Entity,
    I18nService,
} from '@zsport/api';
import { CompetitionFormButtonFactory } from '@zsport/domain/sport/competition/form';

import { AdminCompetitionPermissionsService } from '../../../../../permission/competition';

@Injectable()
export class CompetitionFormButtonFactoryImpl extends CompetitionFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private authorizationService: AuthorizationService,
        private competitionStateService: CompetitionStateService,
        private i18nService: I18nService
    ) {
        super();
    }

    public createFormButtons(): ButtonBase[] {
        return [
            this.createSubmitButton(
                (value: Entity) => {
                    if (value.uid) {
                        this.competitionStateService.dispatchUpdateEntityAction(value as Competition);
                    } else {
                        this.competitionStateService.dispatchAddEntityAction(value as Competition);
                    }

                    this.navigateBack();
                },
                1,
                this.i18nService.translate('admin.form.submit')
            ),
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
    }

    private hasCreateOrUpdateEntityPermission(): boolean {
        const hasCreateCompetitionEntityPermission = this.authorizationService.hasPermission(
            AdminCompetitionPermissionsService.createCompetitionEntity
        );

        const hasUpdateCompetitionEntityPermission = this.authorizationService.hasPermission(
            AdminCompetitionPermissionsService.updateCompetitionEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreateCompetitionEntityPermission ||
            hasUpdateCompetitionEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
