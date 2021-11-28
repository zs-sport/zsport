import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CompetitionStateService } from '@zsport/api';

import { CompetitionStateServiceImpl } from './state/competition-state.service.impl';
import { CompetitionEffects } from './state/competition.effects';
import * as fromCompetition from './state/competition.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('competition', fromCompetition.reducer),
        EffectsModule.forFeature([CompetitionEffects]),
    ],
    providers: [
        {
            provide: CompetitionStateService,
            useClass: CompetitionStateServiceImpl,
        },
    ],
})
export class DomainSportCompetitionStoreModule {}
