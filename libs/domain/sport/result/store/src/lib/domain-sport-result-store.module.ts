import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RESULT_FEATURE_KEY, ResultStateService } from '@zsport/api';

import { ResultStateServiceImpl } from './state/result-state.service.impl';
import { ResultEffects } from './state/result.effects';
import * as fromResult from './state/result.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(RESULT_FEATURE_KEY, fromResult.reducer),
        EffectsModule.forFeature([ResultEffects]),
    ],
    providers: [
        {
            provide: ResultStateService,
            useClass: ResultStateServiceImpl,
        },
    ],
})
export class DomainSportResultStoreModule {}
