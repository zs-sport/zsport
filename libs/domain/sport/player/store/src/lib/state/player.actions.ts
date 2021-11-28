import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { EventPlayer, PlayerEntity } from '@zsport/api';

export const addPlayer = createAction('[Player] Add Player', props<{ player: PlayerEntity }>());

export const addPlayerFail = createAction('[Player] Add Player Fail', props<{ error: Error }>());

export const addPlayerSuccess = createAction('[Player] Add Player Success', props<{ player: PlayerEntity }>());

export const changeNewEntityButtonEnabled = createAction(
    '[Player Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearPlayers = createAction('[Player] Clear Players');

export const deletePlayer = createAction('[Player] Delete Player', props<{ playerId: string }>());

export const deletePlayerFail = createAction('[Player] Delete Player Fail', props<{ error: Error }>());

export const deletePlayerSuccess = createAction('[Player] Delete Player Success', props<{ playerId: string }>());

export const listPlayers = createAction('[Player] List Players');

export const listPlayersFail = createAction('[Player] List Players FAIL', props<{ error: Error }>());

export const listPlayersSuccess = createAction('[Player] List Players Success', props<{ players: PlayerEntity[] }>());

export const listPlayersByAGGCId = createAction(
    '[Player] List Players By AgeGroup Gender Category Id',
    props<{ aggcId: string }>()
);

export const listPlayersByAGGCIdSuccess = createAction(
    '[Player] List Players By AgeGroup Gender Category Id Success',
    props<{ players: PlayerEntity[] }>()
);

export const listPlayersByAGGCIdFail = createAction(
    '[Player] List Players By AgeGroup Gender Category Id Fail',
    props<{ error: Error }>()
);

export const listPlayersByAGGCIdAndClubIds = createAction(
    '[Competition] List Players By AgeGroup Gender Category Id and Club Ids',
    props<{ aggcId: string; sportClubIds: string[] }>()
);

export const listPlayersByAGGCIdAndClubIdsSuccess = createAction(
    '[Competition] List Players By AgeGroup Gender Category Id And Club Ids Success',
    props<{ players: PlayerEntity[] }>()
);

export const listPlayersByCategoryId = createAction(
    '[Players] List Players By Category Id',
    props<{ categoryId: string }>()
);

export const listPlayersByCategoryIdSuccess = createAction(
    '[Players] List Players By Category Id Success',
    props<{ players: PlayerEntity[] }>()
);

export const listEventPlayersByEventId = createAction(
    '[EventPlayer] List Event Players By Event Id',
    props<{ eventId: string }>()
);

export const listEventPlayersByEventIdSuccess = createAction(
    '[EventPlayer] List Event Players By Event Id Success',
    props<{ eventPlayers: EventPlayer[] }>()
);

export const updateEventPlayerByEventId = createAction(
    '[EventPlayer] Update Event Player By Event Id',
    props<{ eventPlayer: EventPlayer; eventId: string }>()
);

export const updateEventPlayerByEventIdSuccess = createAction(
    '[EventPlayer] Update Event Player By Event Id Success',
    props<{ eventPlayer: Update<PlayerEntity> }>()
);

export const loadPlayer = createAction('[Player] Load Player', props<{ uid: string }>());

export const loadPlayerFail = createAction('[Player] Load Player FAIL', props<{ error: Error }>());

export const loadPlayerSuccess = createAction('[Player] Load Player Success', props<{ player: PlayerEntity }>());

export const selectPlayer = createAction('[Player] Select Player', props<{ playerId: string }>());

export const setSelectedPlayerId = createAction('[Player Admin] Set Selected Player Id', props<{ playerId: string }>());

export const updatePlayer = createAction('[Player] Update Player', props<{ player: PlayerEntity }>());

export const updatePlayerFail = createAction('[Player] Update Player Fail', props<{ error: Error }>());

export const updatePlayerSuccess = createAction(
    '[Player] Update Player Success',
    props<{ player: Update<PlayerEntity> }>()
);

export const addPlayerByClubId = createAction(
    '[Player Admin] Add Player By Club Id',
    props<{ player: PlayerEntity; clubId: string }>()
);

export const addPlayerByClubIdSuccess = createAction(
    '[Player Admin] Add Player By Club Id Success',
    props<{ player: PlayerEntity; clubId: string }>()
);

export const addPlayerByClubIdFail = createAction(
    '[Player Admin] Add Player By Club Id Fail',
    props<{ error: Error }>()
);

export const listPlayersByClubId = createAction('[Player Admin] List Players By Club Id', props<{ clubId: string }>());

export const listPlayersByClubIdSuccess = createAction(
    '[Player Admin] List Players By Club Id Success',
    props<{ players: PlayerEntity[] }>()
);

export const listPlayersByClubIdFail = createAction(
    '[Player Admin] List Players by Club Id FAIL',
    props<{ error: Error }>()
);

export const updatePlayerByClubId = createAction(
    '[Player Admin] Update Player By Club Id',
    props<{ player: PlayerEntity; clubId: string }>()
);

export const updatePlayerByClubIdSuccess = createAction(
    '[Player Admin] Update Player By Club Id Success',
    props<{ player: Update<PlayerEntity> }>()
);

export const updatePlayerByClubIdFail = createAction(
    '[Player Admin] Update Player By Club Id Fail',
    props<{ error: Error }>()
);
