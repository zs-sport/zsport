import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { RoleEntity } from '@zsport/api';

export const addRole = createAction('[Role] Add Role', props<{ role: RoleEntity }>());

export const addRoleFail = createAction('[Role] Add Role Fail', props<{ error: Error }>());

export const addRoleSuccess = createAction('[Role] Add Role Success', props<{ role: RoleEntity }>());

export const changeNewEntityButtonEnabled = createAction(
    '[Role Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearRoles = createAction('[Role] Clear Roles');

export const deleteRole = createAction('[Role] Delete Role', props<{ roleId: string }>());

export const deleteRoleFail = createAction('[Role] Delete Role Fail', props<{ error: Error }>());

export const deleteRoleSuccess = createAction('[Role] Delete Role Success', props<{ roleId: string }>());

export const listRoles = createAction('[Role] List Roles');

export const listRolesFail = createAction('[Role] List Roles FAIL', props<{ error: Error }>());

export const listRolesSuccess = createAction('[Role] List Roles Success', props<{ roles: RoleEntity[] }>());

export const listRolesByCategoryId = createAction('[Roles] List Roles By Category Id', props<{ categoryId: string }>());

export const listRolesByCategoryIdSuccess = createAction(
    '[Roles] List Roles By Category Id Success',
    props<{ roles: RoleEntity[] }>()
);

export const loadRole = createAction('[Role] Load Role', props<{ uid: string }>());

export const loadRoleFail = createAction('[Role] Load Role FAIL', props<{ error: Error }>());

export const loadRoleSuccess = createAction('[Role] Load Role Success', props<{ role: RoleEntity | undefined }>());

export const selectRole = createAction('[Role] Select Role', props<{ roleId: string }>());

export const setSelectedRoleId = createAction('[Role Admin] Set Selected Role Id', props<{ roleId: string }>());

export const updateRole = createAction('[Role] Update Role', props<{ role: RoleEntity }>());

export const updateRoleFail = createAction('[Role] Update Role Fail', props<{ error: Error }>());

export const updateRoleSuccess = createAction('[Role] Update Role Success', props<{ role: Update<RoleEntity> }>());
