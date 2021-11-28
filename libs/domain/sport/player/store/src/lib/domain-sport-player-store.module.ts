import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PLAYER_FEATURE_KEY, PlayerStateService } from '@zsport/api';

import { PlayerStateServiceImpl } from './state/player-state.service.impl';
import { PlayerEffects } from './state/player.effects';
import * as fromPlayer from './state/player.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(PLAYER_FEATURE_KEY, fromPlayer.reducer),
        EffectsModule.forFeature([PlayerEffects]),
    ],
    providers: [
        {
            provide: PlayerStateService,
            useClass: PlayerStateServiceImpl,
        },
    ],
})
export class DomainSportPlayerStoreModule {}
