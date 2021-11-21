import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ROLE_FEATURE_KEY } from '@zsport/api';

import { roleAdapter, RolePartialState, State } from './role.reducer';

const { selectAll, selectEntities } = roleAdapter.getSelectors();

export const getRoleState = createFeatureSelector<RolePartialState, State>(ROLE_FEATURE_KEY);

export const getRoleError = createSelector(getRoleState, (state: State) => state.error);

export const getRoleLoading = createSelector(getRoleState, (state: State) => state.loading);

export const getSelectedId = createSelector(getRoleState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(getRoleState, (state: State) => state.isNewEntityButtonEnabled);

export const selectRoleEntities = createSelector(getRoleState, selectEntities);

export const selectAllRole = createSelector(getRoleState, selectAll);

export const selectRole = createSelector(
    selectRoleEntities,
    getSelectedId,
    (roleEntities, roleID) => roleEntities[roleID]
);
