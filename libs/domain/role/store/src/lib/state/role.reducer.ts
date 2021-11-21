import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ROLE_FEATURE_KEY, RoleEntity } from '@zsport/api';

import * as roleActions from './role.actions';

export interface State extends EntityState<RoleEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface RolePartialState {
    readonly [ROLE_FEATURE_KEY]: State;
}

export const roleAdapter: EntityAdapter<RoleEntity> = createEntityAdapter<RoleEntity>({
    selectId: (model: RoleEntity) => model.uid || '',
});

export const initialState: State = roleAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedRoleId: null,
});

export const roleReducer = createReducer(
    initialState,
    on(roleActions.addRoleSuccess, (state, { role }) => roleAdapter.addOne(role as RoleEntity, state)),
    on(roleActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(roleActions.selectRole, (state, { roleId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedRoleId: roleId,
    })),
    on(roleActions.updateRoleSuccess, (state, { role }) => roleAdapter.updateOne(role, state)),
    on(roleActions.deleteRoleSuccess, (state, { roleId }) => roleAdapter.removeOne(roleId, state)),
    on(roleActions.listRolesSuccess, (state, { roles }) => roleAdapter.upsertMany(roles as RoleEntity[], state)),
    on(roleActions.loadRoleSuccess, (state, { role }) => roleAdapter.upsertOne(role as RoleEntity, state)),
    on(roleActions.clearRoles, (state) => roleAdapter.removeAll(state)),
    on(roleActions.setSelectedRoleId, (state, { roleId }) => ({ ...state, selectedId: roleId }))
);

export function reducer(state: State | undefined, action: Action) {
    return roleReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = roleAdapter.getSelectors();
