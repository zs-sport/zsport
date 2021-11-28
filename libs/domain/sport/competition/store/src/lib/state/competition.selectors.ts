import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CompetitionEntity } from '@zsport/api';

import * as fromCompetition from './competition.reducer';

export const selectCompetitionState = createFeatureSelector<fromCompetition.CompetitionState>('competition');

export const getError = (state: fromCompetition.CompetitionState) => state.error;

export const getLoadingIndicator = (state: fromCompetition.CompetitionState) => state.loading;

export const getSelectedCompetitionID = (state: fromCompetition.CompetitionState) => state.selectedCompetitionId || '';

export const selectCompetitionID = createSelector(selectCompetitionState, getSelectedCompetitionID);

export const selectCompetitionEntities = createSelector(selectCompetitionState, fromCompetition.selectEntities);

export const selectAllCompetition = createSelector(selectCompetitionState, fromCompetition.selectAll);

export const selectCompetitionById = createSelector(
    selectCompetitionEntities,
    (competitionEntities: Dictionary<CompetitionEntity>, props: any) => {
        return competitionEntities[props.competitionId];
    }
);

export const selectCompetition = createSelector(
    selectCompetitionEntities,
    selectCompetitionID,
    (competitionEntities, competitionId) => competitionEntities[competitionId]
);
