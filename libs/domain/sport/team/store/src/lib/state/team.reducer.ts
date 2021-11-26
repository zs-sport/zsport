import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { EventTeam, TEAM_FEATURE_KEY, TeamEntity } from '@zsport/api';

import * as teamActions from './team.actions';

export interface State extends EntityState<TeamEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface TeamPartialState {
    readonly [TEAM_FEATURE_KEY]: State;
}

export const teamAdapter: EntityAdapter<TeamEntity> = createEntityAdapter<TeamEntity>({
    selectId: (model: TeamEntity) => model.uid || '',
});

export const initialState: State = teamAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedTeamId: null,
});

export const teamReducer = createReducer(
    initialState,
    on(teamActions.addTeamSuccess, (state, { team }) => teamAdapter.addOne(team as TeamEntity, state)),
    on(teamActions.addTeamByClubIdSuccess, (state, { team }) => teamAdapter.addOne(team, state)),
    on(teamActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(teamActions.selectTeam, (state, { teamId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedTeamId: teamId,
    })),
    on(teamActions.updateTeamSuccess, (state, { team }) => teamAdapter.updateOne(team, state)),
    on(teamActions.deleteTeamSuccess, (state, { teamId }) => teamAdapter.removeOne(teamId, state)),
    on(teamActions.listEventTeamsByEventIdSuccess, (state, { eventTeams }) =>
        teamAdapter.upsertMany(eventTeams as EventTeam[], state)
    ),
    on(teamActions.listTeamsSuccess, (state, { teams }) => teamAdapter.upsertMany(teams as TeamEntity[], state)),
    on(teamActions.listTeamsByAGGCIdSuccess, (state, { teams }) => teamAdapter.upsertMany(teams, state)),
    on(teamActions.listTeamsByAGGCIdAndClubIdsSuccess, (state, { teams }) => teamAdapter.upsertMany(teams, state)),
    on(teamActions.listTeamsByClubIdSuccess, (state, { teams }) => teamAdapter.upsertMany(teams, state)),
    on(teamActions.loadTeamSuccess, (state, { team }) => teamAdapter.upsertOne(team as TeamEntity, state)),
    on(teamActions.clearTeams, (state) => teamAdapter.removeAll(state)),
    on(teamActions.setSelectedTeamId, (state, { teamId }) => ({ ...state, selectedId: teamId })),
    on(teamActions.updateTeamByClubIdSuccess, (state, { team }) => teamAdapter.updateOne(team, state))
);

export function reducer(state: State | undefined, action: Action) {
    return teamReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = teamAdapter.getSelectors();
