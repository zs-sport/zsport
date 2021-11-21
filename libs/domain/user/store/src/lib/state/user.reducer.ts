import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { USER_FEATURE_KEY, UserEntity } from '@zsport/api';

import * as UserActions from './user.actions';

export interface State extends EntityState<UserEntity> {
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface UserPartialState {
    readonly [USER_FEATURE_KEY]: State;
}

export const userAdapter: EntityAdapter<UserEntity> = createEntityAdapter<UserEntity>({
    selectId: (model: UserEntity) => model.uid || '',
});

export const initialState: State = userAdapter.getInitialState({
    loading: false,
});

const userReducer = createReducer(
    initialState,
    on(UserActions.addUser, (state) => ({ ...state, loading: false, error: null })),
    on(UserActions.addUserSuccess, (state, { user }) => userAdapter.addOne(user, { ...state, loading: true })),
    on(UserActions.addUserFail, (state, { error }) => ({ ...state, error })),
    on(UserActions.loadUser, UserActions.loadExistedUser, (state) => ({ ...state, loading: false, error: null })),
    on(UserActions.loadUserSuccess, UserActions.loadExistedUserSuccess, (state, { user }) =>
        userAdapter.upsertOne(user, { ...state, loading: true })
    ),
    on(UserActions.loadUserFail, UserActions.loadExistedUserFail, (state, { error }) => ({ ...state, error })),
    on(UserActions.loadUsers, (state) => ({ ...state, loading: false, error: null })),
    on(UserActions.loadUsersSuccess, (state, { users }) => userAdapter.upsertMany(users, { ...state, loading: true })),
    on(UserActions.loadUsersFail, (state, { error }) => ({ ...state, error })),
    on(UserActions.setSelectedUserId, (state, { userId }) => ({ ...state, selectedId: userId })),
    on(UserActions.updateUserSuccess, (state, { user }) => userAdapter.updateOne(user, state)),
    on(UserActions.updateUserFail, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
    return userReducer(state, action);
}
