import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService, ButtonBase, Entity, I18nService, TeamEntity, TeamStateService } from '@zsport/api';
import { TeamAdminPermissionsService } from '@zsport/domain/sport/team/admin';
import { TeamFormButtonFactory } from '@zsport/domain/sport/team/form';

@Injectable()
export class TeamFormButtonFactoryImpl extends TeamFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private activatedRoute: ActivatedRoute,
        private authorizationService: AuthorizationService,
        private sportTeamStateService: TeamStateService,
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
                            this.sportTeamStateService.dispatchUpdateTeamByClubIdAction(value as TeamEntity, clubId);
                        } else {
                            this.sportTeamStateService.dispatchAddTeamByClubIdAction(value as TeamEntity, clubId);
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
        const hasCreateTeamEntityPermission = this.authorizationService.hasPermission(
            TeamAdminPermissionsService.createTeamEntity
        );

        const hasUpdateTeamEntityPermission = this.authorizationService.hasPermission(
            TeamAdminPermissionsService.updateTeamEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') || hasCreateTeamEntityPermission || hasUpdateTeamEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
