import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Result, RESULT_FEATURE_KEY } from '@zsport/api';

import * as resultActions from './result.actions';

export interface State extends EntityState<Result> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface ResultPartialState {
    readonly [RESULT_FEATURE_KEY]: State;
}

export const resultAdapter: EntityAdapter<Result> = createEntityAdapter<Result>({
    selectId: (model: Result) => model.uid || '',
});

export const initialState: State = resultAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedResultId: null,
});

export const resultReducer = createReducer(
    initialState,
    on(resultActions.addResultSuccess, (state, { result }) => resultAdapter.addOne(result as Result, state)),
    on(resultActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(resultActions.selectResult, (state, { resultId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedResultId: resultId,
    })),
    on(resultActions.updateResultSuccess, (state, { result }) => resultAdapter.updateOne(result, state)),
    on(resultActions.deleteResultSuccess, (state, { resultId }) => resultAdapter.removeOne(resultId, state)),
    on(resultActions.listResultsSuccess, (state, { results }) => resultAdapter.upsertMany(results as Result[], state)),
    on(resultActions.loadResultSuccess, (state, { result }) => resultAdapter.upsertOne(result as Result, state)),
    on(resultActions.clearResults, (state) => resultAdapter.removeAll(state)),
    on(resultActions.setSelectedResultId, (state, { resultId }) => ({ ...state, selectedId: resultId }))
);

export function reducer(state: State | undefined, action: Action) {
    return resultReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = resultAdapter.getSelectors();
