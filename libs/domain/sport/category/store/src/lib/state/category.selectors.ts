import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CATEGORY_FEATURE_KEY } from '@zsport/api';

import { categoryAdapter, CategoryPartialState, State } from './category.reducer';

const { selectAll, selectEntities } = categoryAdapter.getSelectors();

export const getCategoryState = createFeatureSelector<CategoryPartialState, State>(CATEGORY_FEATURE_KEY);

export const getCategoryError = createSelector(getCategoryState, (state: State) => state.error);

export const getCategoryLoading = createSelector(getCategoryState, (state: State) => state.loading);

export const getSelectedId = createSelector(getCategoryState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(
    getCategoryState,
    (state: State) => state.isNewEntityButtonEnabled
);

export const selectCategoryEntities = createSelector(getCategoryState, selectEntities);

export const selectAllCategory = createSelector(getCategoryState, selectAll);

export const selectCategory = createSelector(
    selectCategoryEntities,
    getSelectedId,
    (categoryEntities, categoryID) => categoryEntities[categoryID]
);
