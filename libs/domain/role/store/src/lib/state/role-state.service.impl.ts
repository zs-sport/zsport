import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RoleEntity, RoleStateService } from '@zsport/api';

import * as roleActions from './role.actions';
import * as fromRole from './role.reducer';
import * as roleSelectors from './role.selectors';

@Injectable()
export class RoleStateServiceImpl extends RoleStateService {
    public constructor(private store: Store<fromRole.RolePartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: RoleEntity): void {
        this.store.dispatch(roleActions.addRole({ role: entity as RoleEntity }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(roleActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(uid: string): void {
        this.store.dispatch(roleActions.deleteRole({ roleId: uid }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(roleActions.listRoles());
    }

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(roleActions.loadRole({ uid }));
    }

    public dispatchSelectRoleAction(uid: string): void {
        this.store.dispatch(roleActions.selectRole({ roleId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(roleActions.setSelectedRoleId({ roleId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: RoleEntity): void {
        this.store.dispatch(roleActions.updateRole({ role: entity as RoleEntity }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<RoleEntity[]> {
        return this.store.pipe(select(roleSelectors.selectAllRole));
    }

    public selectEntityById$(uid: string): Observable<RoleEntity | undefined> {
        return this.store.pipe(select(roleSelectors.selectRole));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(roleSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<RoleEntity | undefined> {
        return this.store.pipe(select(roleSelectors.selectRole));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(roleSelectors.getSelectedId));
    }
}
