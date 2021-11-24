import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CategoryStateService, CATEGORY_FEATURE_KEY } from '@zsport/api';

import { CategoryStateServiceImpl } from './state/category-state.service.impl';
import { CategoryEffects } from './state/category.effects';
import * as fromCategory from './state/category.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(CATEGORY_FEATURE_KEY, fromCategory.reducer),
        EffectsModule.forFeature([CategoryEffects]),
    ],
    providers: [
        {
            provide: CategoryStateService,
            useClass: CategoryStateServiceImpl,
        },
    ],
})
export class DomainSportCategoryStoreModule {}
