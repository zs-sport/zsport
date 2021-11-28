import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { PLAYER_FEATURE_KEY, PlayerEntity } from '@zsport/api';

import * as playerActions from './player.actions';

export interface State extends EntityState<PlayerEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface PlayerPartialState {
    readonly [PLAYER_FEATURE_KEY]: State;
}

export const playerAdapter: EntityAdapter<PlayerEntity> = createEntityAdapter<PlayerEntity>({
    selectId: (model: PlayerEntity) => model.uid || '',
});

export const initialState: State = playerAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedPlayerId: null,
});

export const playerReducer = createReducer(
    initialState,
    on(playerActions.addPlayerSuccess, (state, { player }) => playerAdapter.addOne(player as PlayerEntity, state)),
    on(playerActions.addPlayerByClubIdSuccess, (state, { player }) => playerAdapter.addOne(player, state)),
    on(playerActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(playerActions.selectPlayer, (state, { playerId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedPlayerId: playerId,
    })),
    on(playerActions.updatePlayerSuccess, (state, { player }) => playerAdapter.updateOne(player, state)),
    on(playerActions.deletePlayerSuccess, (state, { playerId }) => playerAdapter.removeOne(playerId, state)),
    on(playerActions.listPlayersSuccess, (state, { players }) =>
        playerAdapter.upsertMany(players as PlayerEntity[], state)
    ),
    on(playerActions.listPlayersByAGGCIdSuccess, (state, { players }) => playerAdapter.upsertMany(players, state)),
    on(playerActions.listPlayersByAGGCIdAndClubIdsSuccess, (state, { players }) =>
        playerAdapter.upsertMany(players, state)
    ),
    on(playerActions.listPlayersByClubIdSuccess, (state, { players }) => playerAdapter.upsertMany(players, state)),
    on(playerActions.loadPlayerSuccess, (state, { player }) => playerAdapter.upsertOne(player as PlayerEntity, state)),
    on(playerActions.clearPlayers, (state) => playerAdapter.removeAll(state)),
    on(playerActions.setSelectedPlayerId, (state, { playerId }) => ({ ...state, selectedId: playerId })),
    on(playerActions.updatePlayerByClubIdSuccess, (state, { player }) => playerAdapter.updateOne(player, state))
);

export function reducer(state: State | undefined, action: Action) {
    return playerReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = playerAdapter.getSelectors();
