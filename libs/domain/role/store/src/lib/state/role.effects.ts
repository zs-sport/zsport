import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RoleDataService, RoleEntity, RoleModel } from '@zsport/api';

import * as roleActions from './role.actions';

@Injectable()
export class RoleEffects {
    public addRole = createEffect(() =>
        this.actions$.pipe(
            ofType(roleActions.addRole),
            switchMap((action) =>
                this.roleDataService.add$(action.role).pipe(
                    map((role) => {
                        return roleActions.addRoleSuccess({
                            role: { ...role },
                        });
                    })
                )
            )
        )
    );
    public listRoles = createEffect(() =>
        this.actions$.pipe(
            ofType(roleActions.listRoles),
            switchMap(() =>
                this.roleDataService.list$().pipe(
                    map((roles) => {
                        return roleActions.listRolesSuccess({
                            roles: roles as RoleEntity[],
                        });
                    })
                )
            )
        )
    );
    public loadRole = createEffect(() =>
        this.actions$.pipe(
            ofType(roleActions.loadRole),
            switchMap((action) =>
                this.roleDataService.load$(action.uid).pipe(
                    map((role) => {
                        return roleActions.loadRoleSuccess({
                            role: role ? { ...role } : role,
                        });
                    }),
                    catchError((error) => {
                        return of(roleActions.loadRoleFail(error));
                    })
                )
            )
        )
    );
    public updateRole = createEffect(() =>
        this.actions$.pipe(
            ofType(roleActions.updateRole),
            switchMap((action) =>
                this.roleDataService.update$(action.role).pipe(
                    map((role) => {
                        return roleActions.updateRoleSuccess({
                            role: { id: role.uid || '', changes: role as RoleModel },
                        });
                    })
                )
            )
        )
    );

    public constructor(private actions$: Actions, private roleDataService: RoleDataService) {}
}
