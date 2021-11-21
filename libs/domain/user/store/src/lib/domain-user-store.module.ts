import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { USER_FEATURE_KEY, UserStateService } from '@zsport/api';

import { UserStateServiceImpl } from './state/user-state.service.impl';
import { UserEffects } from './state/user.effects';
import * as fromUser from './state/user.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(USER_FEATURE_KEY, fromUser.reducer),
        EffectsModule.forFeature([UserEffects]),
    ],
    providers: [
        {
            provide: UserStateService,
            useClass: UserStateServiceImpl,
        },
    ],
})
export class DomainUserStoreModule {}
