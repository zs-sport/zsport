import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CompetitionEntity } from '@zsport/api';

import * as competitionActions from './competition.actions';

export interface CompetitionState extends EntityState<CompetitionEntity> {
    error: string | null;
    loading: boolean;
    selectedCompetitionId: string | null;
}

export const adapter: EntityAdapter<CompetitionEntity> = createEntityAdapter<CompetitionEntity>({
    selectId: (model: CompetitionEntity) => model.uid || '',
});

export const initialState: CompetitionState = adapter.getInitialState({
    loading: false,
    error: null,
    selectedCompetitionId: null,
});

export const reducer = createReducer(
    initialState,
    on(competitionActions.addCompetition, (state, { competition }) => adapter.addOne(competition, state)),
    on(competitionActions.selectCompetition, (state, { competitionId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedCompetitionId: competitionId,
    })),
    on(competitionActions.updateCompetitionSuccess, (state, { competition }) => adapter.updateOne(competition, state)),
    on(competitionActions.deleteCompetitionSuccess, (state, { competitionId }) =>
        adapter.removeOne(competitionId, state)
    ),
    on(competitionActions.loadCompetitionsSuccess, (state, { competitions }) =>
        adapter.upsertMany(competitions, state)
    ),
    on(competitionActions.clearCompetition, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
