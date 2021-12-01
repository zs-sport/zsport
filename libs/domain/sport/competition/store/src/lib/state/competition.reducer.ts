import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Competition, COMPETITION_FEATURE_KEY } from '@zsport/api';

import * as competitionActions from './competition.actions';

export interface State extends EntityState<Competition> {
    error?: string | null;
    isNewEntityButtonEnabled: boolean;
    loading: boolean;
    selectedFinalTabId: number;
    selectedId?: string;
}

export interface CompetitionPartialState {
    readonly [COMPETITION_FEATURE_KEY]: State;
}

export const competitionAdapter: EntityAdapter<Competition> = createEntityAdapter<Competition>({
    selectId: (model: Competition) => model.uid || '',
});

export const initialState: State = competitionAdapter.getInitialState({
    error: null,
    isNewEntityButtonEnabled: true,
    loading: false,
    selectedCompetitionId: null,
    selectedFinalTabId: 0,
});

export const competitionReducer = createReducer(
    initialState,
    on(competitionActions.addCompetitionSuccess, (state, { competition }) =>
        competitionAdapter.addOne(competition as Competition, state)
    ),
    on(competitionActions.addEventByCompetitionIdSuccess, (state, { event }) => ({
        ...state,
        loading: false,
    })),
    on(competitionActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(competitionActions.selectCompetition, (state, { competitionId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedCompetitionId: competitionId,
    })),
    on(competitionActions.changeSelectedFinalTabId, (state, { selectedFinalTabId }) => ({
        ...state,
        selectedFinalTabId,
    })),
    on(competitionActions.updateCompetitionSuccess, (state, { competition }) =>
        competitionAdapter.updateOne(competition, state)
    ),
    on(competitionActions.deleteCompetitionSuccess, (state, { competitionId }) =>
        competitionAdapter.removeOne(competitionId, state)
    ),
    on(competitionActions.listCompetitionsSuccess, (state, { competitions }) =>
        competitionAdapter.upsertMany(competitions as Competition[], state)
    ),
    on(competitionActions.loadCompetitionSuccess, (state, { competition }) =>
        competitionAdapter.upsertOne(competition as Competition, state)
    ),
    on(competitionActions.clearCompetitions, (state) => competitionAdapter.removeAll(state)),
    on(competitionActions.setSelectedCompetitionId, (state, { competitionId }) => ({
        ...state,
        selectedId: competitionId,
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return competitionReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = competitionAdapter.getSelectors();
