import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RESULT_FEATURE_KEY, ResultEntity } from '@zsport/api';

import { resultAdapter, ResultPartialState, State } from './result.reducer';

const { selectAll, selectEntities } = resultAdapter.getSelectors();

export const getResultState = createFeatureSelector<ResultPartialState, State>(RESULT_FEATURE_KEY);

export const getResultError = createSelector(getResultState, (state: State) => state.error);

export const getResultLoading = createSelector(getResultState, (state: State) => state.loading);

export const getSelectedId = createSelector(getResultState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(
    getResultState,
    (state: State) => state.isNewEntityButtonEnabled
);

export const selectResultEntities = createSelector(getResultState, selectEntities);

export const selectAllResult = createSelector(getResultState, selectAll);

export const selectResult = createSelector(
    selectResultEntities,
    getSelectedId,
    (resultEntities, resultId) => resultEntities[resultId]
);

export const selectResultById = () =>
    createSelector(selectResultEntities, (resultEntities: Dictionary<ResultEntity>, props: any) => {
        return resultEntities[props.resultId];
    });

export const selectResultsByEventId = () =>
    createSelector(selectAllResult, (results: ResultEntity[], props: any) =>
        results.filter((result) => result.eventId === props.eventId)
    );
