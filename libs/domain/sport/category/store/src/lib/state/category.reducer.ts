import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { CATEGORY_FEATURE_KEY, CategoryEntity } from '@zsport/api';

import * as categoryActions from './category.actions';

export interface State extends EntityState<CategoryEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface CategoryPartialState {
    readonly [CATEGORY_FEATURE_KEY]: State;
}

export const categoryAdapter: EntityAdapter<CategoryEntity> = createEntityAdapter<CategoryEntity>({
    selectId: (model: CategoryEntity): string => model.uid || '',
});

export const initialState: State = categoryAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedCategoryId: null,
});

export const categoryReducer = createReducer(
    initialState,
    on(categoryActions.addCategorySuccess, (state, { category }) => categoryAdapter.addOne(category, state)),
    on(categoryActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(categoryActions.selectCategory, (state, { categoryId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedCategoryId: categoryId,
    })),
    on(categoryActions.updateCategorySuccess, (state, { category }) => categoryAdapter.updateOne(category, state)),
    on(categoryActions.deleteCategorySuccess, (state, { categoryId }) => categoryAdapter.removeOne(categoryId, state)),
    on(categoryActions.listCategoriesSuccess, (state, { categories }) => categoryAdapter.upsertMany(categories, state)),
    on(categoryActions.loadCategorySuccess, (state, { category }) => categoryAdapter.upsertOne(category, state)),
    on(categoryActions.clearCategories, (state) => categoryAdapter.removeAll(state)),
    on(categoryActions.setSelectedCategoryId, (state, { categoryId }) => ({
        ...state,
        selectedId: categoryId,
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return categoryReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = categoryAdapter.getSelectors();
