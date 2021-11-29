import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EVENT_FEATURE_KEY, EventStateService } from '@zsport/api';

import { EventStateServiceImpl } from './state/event-state.service.impl';
import { EventEffects } from './state/event.effects';
import * as fromEvent from './state/event.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(EVENT_FEATURE_KEY, fromEvent.reducer),
        EffectsModule.forFeature([EventEffects]),
    ],
    providers: [
        {
            provide: EventStateService,
            useClass: EventStateServiceImpl,
        },
    ],
})
export class DomainSportEventStoreModule {}
