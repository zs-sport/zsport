import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AUTHENTICATION_FEATURE_KEY, AuthenticationStateService } from '@zsport/api';

import { AuthenticationEffects, AuthenticationStateServiceImpl } from './state';
import * as fromAuthentication from './state/authentication.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(AUTHENTICATION_FEATURE_KEY, fromAuthentication.authenticationReducer),
        EffectsModule.forFeature([AuthenticationEffects]),
    ],
    providers: [
        {
            provide: AuthenticationStateService,
            useClass: AuthenticationStateServiceImpl,
        },
    ],
})
export class CoreAuthenticationStoreModule {}
