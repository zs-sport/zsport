import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ROLE_FEATURE_KEY, RoleStateService } from '@zsport/api';

import { RoleStateServiceImpl } from './state/role-state.service.impl';
import { RoleEffects } from './state/role.effects';
import * as fromRole from './state/role.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(ROLE_FEATURE_KEY, fromRole.reducer),
        EffectsModule.forFeature([RoleEffects]),
    ],
    providers: [
        {
            provide: RoleStateService,
            useClass: RoleStateServiceImpl,
        },
    ],
})
export class DomainRoleStoreModule {}
