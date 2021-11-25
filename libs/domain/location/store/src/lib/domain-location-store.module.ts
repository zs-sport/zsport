import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LOCATION_FEATURE_KEY, LocationStateService } from '@zsport/api';

import { LocationStateServiceImpl } from './state/location-state.service.impl';
import { LocationEffects } from './state/location.effects';
import * as fromLocation from './state/location.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(LOCATION_FEATURE_KEY, fromLocation.reducer),
        EffectsModule.forFeature([LocationEffects]),
    ],
    providers: [
        {
            provide: LocationStateService,
            useClass: LocationStateServiceImpl,
        },
    ],
})
export class DomainLocationStoreModule {}
