import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { UserEntity, UserModel } from '@zsport/api';

export const addUser = createAction('[User Admin] Add User', props<{ user: UserEntity }>());
export const addUserFail = createAction('[User Admin] Add User Fail', props<{ error: string }>());
export const addUserSuccess = createAction('[User Admin] Add User Success', props<{ user: UserEntity }>());

export const loadExistedUser = createAction('[Authentication] Load Existed User', props<{ user: UserModel }>());
export const loadExistedUserSuccess = createAction(
    '[Authentication] Load Existed User Success',
    props<{ user: UserEntity }>()
);
export const loadExistedUserFail = createAction('[Authentication] Load Existed User Fail', props<{ error: string }>());

export const loadUser = createAction('[User] Load User', props<{ uid: string }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: UserEntity }>());
export const loadUserFail = createAction('[User] Load User Fail', props<{ error: string }>());

export const loadUsers = createAction('[User Admin] Load Users');
export const loadUsersSuccess = createAction('[User Admin] Load Users Success', props<{ users: UserEntity[] }>());
export const loadUsersFail = createAction('[User Admin] Load Users Fail', props<{ error: string }>());

export const setSelectedUserId = createAction('[User Admin] Set Selected User Id', props<{ userId: string }>());

export const updateUser = createAction('[User Admin] Update User', props<{ user: UserEntity }>());
export const updateUserFail = createAction('[User Admin] Update User Fail', props<{ error: string }>());
export const updateUserSuccess = createAction(
    '[User Admin] Update User Success',
    props<{ user: Update<UserEntity> }>()
);
