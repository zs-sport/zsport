import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CLUB_FEATURE_KEY, ClubStateService } from '@zsport/api';

import { ClubStateServiceImpl } from './state/club-state.service.impl';
import { ClubEffects } from './state/club.effects';
import * as fromClub from './state/club.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(CLUB_FEATURE_KEY, fromClub.reducer),
        EffectsModule.forFeature([ClubEffects]),
    ],
    providers: [
        {
            provide: ClubStateService,
            useClass: ClubStateServiceImpl,
        },
    ],
})
export class DomainSportClubStoreModule {}
