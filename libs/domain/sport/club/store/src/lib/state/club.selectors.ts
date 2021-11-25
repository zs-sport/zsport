import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClubEntity, CLUB_FEATURE_KEY } from '@zsport/api';

import { clubAdapter, ClubPartialState, State } from './club.reducer';

const { selectAll, selectEntities } = clubAdapter.getSelectors();

export const getClubState = createFeatureSelector<ClubPartialState, State>(CLUB_FEATURE_KEY);

export const getClubError = createSelector(getClubState, (state: State) => state.error);

export const getClubLoading = createSelector(getClubState, (state: State) => state.loading);

export const getSelectedId = createSelector(getClubState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(getClubState, (state: State) => state.isNewEntityButtonEnabled);

export const selectClubEntities = createSelector(getClubState, selectEntities);

export const selectAllClub = createSelector(getClubState, (state: State) => selectAll(state));

export const selectClub = createSelector(
    selectClubEntities,
    getSelectedId,
    (clubEntities, clubId) => clubEntities[clubId]
);

export const selectClubById = () =>
    createSelector(selectClubEntities, (clubEntities: Dictionary<ClubEntity>, props: any) => {
        return clubEntities[props.clubId];
    });

export const selectClubsByCategoryId = () =>
    createSelector(selectAllClub, (clubEntities: ClubEntity[], props: any) =>
        clubEntities.filter((club) => club.category && club.category.uid === props.categoryId)
    );

export const selectClubsByAssociationCategoryIdGenderIdAgeGroupId = () =>
    createSelector(selectAllClub, (clubEntities: ClubEntity[], props: any) =>
        clubEntities.filter(
            (club) =>
                club.association &&
                club.association.uid === props.associationId &&
                club.category &&
                club.category.uid === props.categoryId
        )
    );

export const selectPlayersByClubId = () =>
    createSelector(getClubState, (clubState: State, props: any) => {
        return clubState.players.get(props.clubId);
    });
