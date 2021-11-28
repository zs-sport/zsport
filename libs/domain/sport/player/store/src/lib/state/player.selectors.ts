import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventPlayer, PlayerEntity, PLAYER_FEATURE_KEY } from '@zsport/api';

import { State, playerAdapter, PlayerPartialState } from './player.reducer';

const { selectAll, selectEntities } = playerAdapter.getSelectors();

export const getPlayerState = createFeatureSelector<PlayerPartialState, State>(PLAYER_FEATURE_KEY);

export const getPlayerError = createSelector(getPlayerState, (state: State) => state.error);

export const getPlayerLoading = createSelector(getPlayerState, (state: State) => state.loading);

export const getSelectedId = createSelector(getPlayerState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(
    getPlayerState,
    (state: State) => state.isNewEntityButtonEnabled
);

export const selectPlayerEntities = createSelector(getPlayerState, selectEntities);

export const selectAllPlayer = createSelector(getPlayerState, selectAll);

export const selectPlayer = createSelector(
    selectPlayerEntities,
    getSelectedId,
    (playerEntities, playerID) => playerEntities[playerID]
);

export const selectPlayersByClubId = () =>
    createSelector(selectAllPlayer, (players: PlayerEntity[], props: any) =>
        players.filter((player) => player.clubId === props.clubId)
    );
