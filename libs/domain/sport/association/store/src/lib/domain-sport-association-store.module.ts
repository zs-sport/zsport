import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ASSOCIATION_FEATURE_KEY, AssociationStateService } from '@zsport/api';

import { AssociationStateServiceImpl } from './state/association-state.service.impl';
import { AssociationEffects } from './state/association.effects';
import * as fromAssociation from './state/association.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(ASSOCIATION_FEATURE_KEY, fromAssociation.reducer),
        EffectsModule.forFeature([AssociationEffects]),
    ],
    providers: [
        {
            provide: AssociationStateService,
            useClass: AssociationStateServiceImpl,
        },
    ],
})
export class DomainSportAssociationStoreModule {}
