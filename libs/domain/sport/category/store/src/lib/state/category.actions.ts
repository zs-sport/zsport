import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { CategoryEntity } from '@zsport/api';

export const addCategory = createAction('[Category] Add Category', props<{ category: CategoryEntity }>());

export const addCategoryFail = createAction('[Category] Add Category Fail', props<{ error: Error }>());

export const addCategorySuccess = createAction(
    '[Category] Add Category Success',
    props<{ category: CategoryEntity }>()
);

export const changeNewEntityButtonEnabled = createAction(
    '[Category Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearCategories = createAction('[Category] Clear Categories');

export const deleteCategory = createAction('[Category] Delete Category', props<{ categoryId: string }>());

export const deleteCategoryFail = createAction('[Category] Delete Category Fail', props<{ error: Error }>());

export const deleteCategorySuccess = createAction(
    '[Category] Delete Category Success',
    props<{ categoryId: string }>()
);

export const listCategories = createAction('[Category] List Categories');

export const listCategoriesFail = createAction('[Category] List Categories FAIL', props<{ error: Error }>());

export const listCategoriesSuccess = createAction(
    '[Category] List Categories Success',
    props<{ categories: CategoryEntity[] }>()
);

export const listCategoriesByCategoryId = createAction(
    '[Categories] List Categories By Category Id',
    props<{ categoryId: string }>()
);

export const listCategoriesByCategoryIdSuccess = createAction(
    '[Categories] List Categories By Category Id Success',
    props<{ categories: CategoryEntity[] }>()
);

export const loadCategory = createAction('[Category] Load Category', props<{ uid: string }>());

export const loadCategoryFail = createAction('[Category] Load Category FAIL', props<{ error: Error }>());

export const loadCategorySuccess = createAction(
    '[Category] Load Category Success',
    props<{ category: CategoryEntity }>()
);

export const selectCategory = createAction('[Category] Select Category', props<{ categoryId: string }>());

export const setSelectedCategoryId = createAction(
    '[Category Admin] Set Selected Category Id',
    props<{ categoryId: string }>()
);

export const updateCategory = createAction('[Category] Update Category', props<{ category: CategoryEntity }>());

export const updateCategoryFail = createAction('[Category] Update Category Fail', props<{ error: Error }>());

export const updateCategorySuccess = createAction(
    '[Category] Update Category Success',
    props<{ category: Update<CategoryEntity> }>()
);
