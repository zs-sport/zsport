import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService, ButtonBase, Entity, I18nService, PlayerEntity, PlayerStateService } from '@zsport/api';
import { PlayerAdminPermissionsService } from '@zsport/domain/sport/player/admin';
import { PlayerFormButtonFactory } from '@zsport/domain/sport/player/form';

@Injectable()
export class PlayerFormButtonFactoryImpl extends PlayerFormButtonFactory {
    public constructor(
        @Optional() private location: Location,
        private activatedRoute: ActivatedRoute,
        private authorizationService: AuthorizationService,
        private playerStateService: PlayerStateService,
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
                            this.playerStateService.dispatchUpdatePlayerByClubIdAction(value as PlayerEntity, clubId);
                        } else {
                            this.playerStateService.dispatchAddPlayerByClubIdAction(value as PlayerEntity, clubId);
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
        const hasCreatePlayerEntityPermission = this.authorizationService.hasPermission(
            PlayerAdminPermissionsService.createPlayerEntity
        );

        const hasUpdatePlayerEntityPermission = this.authorizationService.hasPermission(
            PlayerAdminPermissionsService.updatePlayerEntity
        );

        return (
            this.authorizationService.hasRole('ADMIN') ||
            hasCreatePlayerEntityPermission ||
            hasUpdatePlayerEntityPermission
        );
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
