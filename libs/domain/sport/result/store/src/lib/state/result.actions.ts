import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Result } from '@zsport/api';

export const addResult = createAction('[Result] Add Result', props<{ result: Result }>());

export const addResultFail = createAction('[Result] Add Result Fail', props<{ error: Error }>());

export const addResultSuccess = createAction('[Result] Add Result Success', props<{ result: Result }>());

export const changeNewEntityButtonEnabled = createAction(
    '[Result Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearResults = createAction('[Result] Clear Results');

export const deleteResult = createAction('[Result] Delete Result', props<{ resultId: string }>());

export const deleteResultFail = createAction('[Result] Delete Result Fail', props<{ error: Error }>());

export const deleteResultSuccess = createAction('[Result] Delete Result Success', props<{ resultId: string }>());

export const listResults = createAction('[Result] List Results');

export const listResultsFail = createAction('[Result] List Results FAIL', props<{ error: Error }>());

export const listResultsSuccess = createAction('[Result] List Results Success', props<{ results: Result[] }>());

export const listResultsByCategoryId = createAction(
    '[Results] List Results By Category Id',
    props<{ categoryId: string }>()
);

export const listResultsByCategoryIdSuccess = createAction(
    '[Results] List Results By Category Id Success',
    props<{ results: Result[] }>()
);

export const listResultsByEventId = createAction('[Results] List Results By Event Id', props<{ eventId: string }>());

export const listResultsByEventIdSuccess = createAction(
    '[Results] List Results By Event Id Success',
    props<{ results: Result[] }>()
);

export const loadResult = createAction('[Result] Load Result', props<{ uid: string }>());

export const loadResultFail = createAction('[Result] Load Result FAIL', props<{ error: Error }>());

export const loadResultSuccess = createAction('[Result] Load Result Success', props<{ result: Result }>());

export const selectResult = createAction('[Result] Select Result', props<{ resultId: string }>());

export const setSelectedResultId = createAction('[Result Admin] Set Selected Result Id', props<{ resultId: string }>());

export const updateResult = createAction('[Result] Update Result', props<{ result: Result }>());

export const updateResultFail = createAction('[Result] Update Result Fail', props<{ error: Error }>());

export const updateResultSuccess = createAction('[Result] Update Result Success', props<{ result: Update<Result> }>());
