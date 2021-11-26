import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TEAM_FEATURE_KEY, TeamStateService } from '@zsport/api';

import { TeamStateServiceImpl } from './state/team-state.service.impl';
import { TeamEffects } from './state/team.effects';
import * as fromTeam from './state/team.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(TEAM_FEATURE_KEY, fromTeam.reducer),
        EffectsModule.forFeature([TeamEffects]),
    ],
    providers: [
        {
            provide: TeamStateService,
            useClass: TeamStateServiceImpl,
        },
    ],
})
export class DomainSportTeamStoreModule {}
