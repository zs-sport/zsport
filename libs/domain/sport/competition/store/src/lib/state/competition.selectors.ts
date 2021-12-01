import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Competition, COMPETITION_FEATURE_KEY } from '@zsport/api';

import { competitionAdapter, CompetitionPartialState, State } from './competition.reducer';

const { selectAll, selectEntities } = competitionAdapter.getSelectors();

export const getCompetitionState = createFeatureSelector<CompetitionPartialState, State>(COMPETITION_FEATURE_KEY);

export const getCompetitionError = createSelector(getCompetitionState, (state: State) => state.error);

export const getCompetitionLoading = createSelector(getCompetitionState, (state: State) => state.loading);

export const getSelectedId = createSelector(getCompetitionState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(
    getCompetitionState,
    (state: State) => state.isNewEntityButtonEnabled
);

export const selectSelectedFinalTabId = createSelector(getCompetitionState, (state: State) => state.selectedFinalTabId);

export const selectCompetitionEntities = createSelector(getCompetitionState, selectEntities);

export const selectAllCompetition = createSelector(getCompetitionState, selectAll);

export const selectCompetition = createSelector(
    selectCompetitionEntities,
    getSelectedId,
    (competitionEntities, competitionID: string) => competitionEntities[competitionID]
);
