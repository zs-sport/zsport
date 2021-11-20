import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { EntityQuantityEntity } from '@zsport/api';

export const addEntityQuantity = createAction(
    '[EntityQuantity] Add EntityQuantity',
    props<{ entityQuantity: EntityQuantityEntity }>()
);

export const addEntityQuantityFail = createAction(
    '[EntityQuantity] Add EntityQuantity Fail',
    props<{ error: Error }>()
);

export const addEntityQuantitySuccess = createAction(
    '[EntityQuantity] Add EntityQuantity Success',
    props<{ entityQuantity: EntityQuantityEntity }>()
);

export const changeNewEntityButtonEnabled = createAction(
    '[EntityQuantity Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearEntityQuantitys = createAction('[EntityQuantity] Clear EntityQuantitys');

export const deleteEntityQuantity = createAction(
    '[EntityQuantity] Delete EntityQuantity',
    props<{ entityQuantityId: string }>()
);

export const deleteEntityQuantityFail = createAction(
    '[EntityQuantity] Delete EntityQuantity Fail',
    props<{ error: Error }>()
);

export const deleteEntityQuantitySuccess = createAction(
    '[EntityQuantity] Delete EntityQuantity Success',
    props<{ entityQuantityId: string }>()
);

export const listEntityQuantitys = createAction('[EntityQuantity] List EntityQuantitys');

export const listEntityQuantitysFail = createAction(
    '[EntityQuantity] List EntityQuantitys FAIL',
    props<{ error: Error }>()
);

export const listEntityQuantitysSuccess = createAction(
    '[EntityQuantity] List EntityQuantitys Success',
    props<{ entityQuantitys: EntityQuantityEntity[] }>()
);

export const listEntityQuantitysByCategoryId = createAction(
    '[EntityQuantitys] List EntityQuantitys By Category Id',
    props<{ categoryId: string }>()
);

export const listEntityQuantitysByCategoryIdSuccess = createAction(
    '[EntityQuantitys] List EntityQuantitys By Category Id Success',
    props<{ entityQuantitys: EntityQuantityEntity[] }>()
);

export const loadEntityQuantity = createAction('[EntityQuantity] Load EntityQuantity', props<{ uid: string }>());

export const loadEntityQuantityFail = createAction(
    '[EntityQuantity] Load EntityQuantity FAIL',
    props<{ error: Error }>()
);

export const loadEntityQuantitySuccess = createAction(
    '[EntityQuantity] Load EntityQuantity Success',
    props<{ entityQuantity: EntityQuantityEntity | undefined }>()
);

export const search = createAction('[EntityQuantity] Search EntityQuantitys', props<{ term: string }>());
export const searchFailed = createAction('[EntityQuantity] Search EntityQuantitys Failed', props<{ error: string }>());
export const searchSuccess = createAction(
    '[EntityQuantity] Search EntityQuantitys Success',
    props<{ result: EntityQuantityEntity[] }>()
);

export const selectEntityQuantity = createAction(
    '[EntityQuantity] Select EntityQuantity',
    props<{ entityQuantityId: string }>()
);

export const setSelectedEntityQuantityId = createAction(
    '[EntityQuantity Admin] Set Selected EntityQuantity Id',
    props<{ entityQuantityId: string }>()
);

export const updateEntityQuantity = createAction(
    '[EntityQuantity] Update EntityQuantity',
    props<{ entityQuantity: EntityQuantityEntity }>()
);

export const updateEntityQuantityFail = createAction(
    '[EntityQuantity] Update EntityQuantity Fail',
    props<{ error: Error }>()
);

export const updateEntityQuantitySuccess = createAction(
    '[EntityQuantity] Update EntityQuantity Success',
    props<{ entityQuantity: Update<EntityQuantityEntity> }>()
);
