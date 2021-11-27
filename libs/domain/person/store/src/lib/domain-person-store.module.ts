import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PERSON_FEATURE_KEY, PersonStateService } from '@zsport/api';

import { PersonStateServiceImpl } from './state/person-state.service.impl';
import { PersonEffects } from './state/person.effects';
import * as fromPerson from './state/person.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(PERSON_FEATURE_KEY, fromPerson.reducer),
        EffectsModule.forFeature([PersonEffects]),
    ],
    providers: [
        {
            provide: PersonStateService,
            useClass: PersonStateServiceImpl,
        },
    ],
})
export class DomainPersonStoreModule {}
