import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventTeam, TeamEntity, TEAM_FEATURE_KEY } from '@zsport/api';

import { State, teamAdapter, TeamPartialState } from './team.reducer';

const { selectAll, selectEntities } = teamAdapter.getSelectors();

export const getTeamState = createFeatureSelector<TeamPartialState, State>(TEAM_FEATURE_KEY);

export const getTeamError = createSelector(getTeamState, (state: State) => state.error);

export const getTeamLoading = createSelector(getTeamState, (state: State) => state.loading);

export const getSelectedId = createSelector(getTeamState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(getTeamState, (state: State) => state.isNewEntityButtonEnabled);

export const selectTeamEntities = createSelector(getTeamState, selectEntities);

export const selectAllTeam = createSelector(getTeamState, selectAll);

export const selectTeam = createSelector(
    selectTeamEntities,
    getSelectedId,
    (teamEntities, teamId) => teamEntities[teamId]
);

export const selectTeamsByClubId = () =>
    createSelector(selectAllTeam, (teams: TeamEntity[], props: any) =>
        teams.filter((team) => team.club && team.club.uid === props.clubId)
    );

export const selectTeamsByAGGCId = () =>
    createSelector(selectAllTeam, (teams: TeamEntity[], props: any) =>
        teams.filter((team) => team.ageGroupGenderCategory === props.aggcId)
    );

export const selectTeamsByAGGCIdAndClubIds = () =>
    createSelector(selectAllTeam, (teams: TeamEntity[], props: any) =>
        teams.filter((team) => {
            return team.ageGroupGenderCategory === props.aggcId && props.clubIds.includes(team.club.uid);
        })
    );

export const selectEventTeamsByEventId = () =>
    createSelector(selectAllTeam, (teams: TeamEntity[], props: any) => {
        return teams.filter((team) => (team as EventTeam).eventId === props.eventId);
    });
