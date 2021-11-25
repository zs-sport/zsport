import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { CLUB_FEATURE_KEY, ClubEntity, PlayerEntity } from '@zsport/api';

import * as clubActions from './club.actions';

export interface State extends EntityState<ClubEntity> {
    players: Map<string, PlayerEntity[]>;
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface ClubPartialState {
    readonly [CLUB_FEATURE_KEY]: State;
}

export const clubAdapter: EntityAdapter<ClubEntity> = createEntityAdapter<ClubEntity>({
    selectId: (model: ClubEntity) => model.uid || '',
});

export const initialState: State = clubAdapter.getInitialState({
    players: new Map<string, PlayerEntity[]>(),
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedClubId: null,
});

export const clubReducer = createReducer(
    initialState,
    on(clubActions.addClubSuccess, (state, { club }) => clubAdapter.addOne(club as ClubEntity, state)),
    on(clubActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(clubActions.selectClub, (state, { clubId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedClubId: clubId,
    })),
    on(clubActions.updateClubSuccess, (state, { club }) => clubAdapter.updateOne(club, state)),
    on(clubActions.deleteClubSuccess, (state, { clubId }) => clubAdapter.removeOne(clubId, state)),
    on(clubActions.listClubsSuccess, (state, { clubs }) => clubAdapter.upsertMany(clubs as ClubEntity[], state)),
    on(clubActions.listClubsByCategoryIdSuccess, (state, { clubs }) => clubAdapter.upsertMany(clubs, state)),
    on(clubActions.listClubsByAssociationIdCategoryIdGenderIdAgeGroupIdSuccess, (state, { clubs }) =>
        clubAdapter.upsertMany(clubs, state)
    ),
    on(clubActions.listPlayersByClubIdSuccess, (state, { players, clubId }) => ({
        ...state,
        players: state.players.set(clubId, players),
    })),
    on(clubActions.loadClubSuccess, (state, { club }) => clubAdapter.upsertOne(club as ClubEntity, state)),
    on(clubActions.clearClubs, (state) => clubAdapter.removeAll(state)),
    on(clubActions.setSelectedClubId, (state, { clubId }) => ({ ...state, selectedId: clubId }))
);

export function reducer(state: State | undefined, action: Action) {
    return clubReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = clubAdapter.getSelectors();
