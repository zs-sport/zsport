import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserEntity, UserModel, UserStateService } from '@zsport/api';

import * as userActions from './user.actions';
import * as fromUser from './user.reducer';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserStateServiceImpl extends UserStateService {
    public constructor(private store: Store<fromUser.UserPartialState>) {
        super();
    }

    public dispatchAddEntityAction(user: UserEntity): void {
        this.store.dispatch(userActions.addUser({ user }));
    }

    public dispatchDeleteEntityAction(uid: string): void {
        throw new Error('Method not implemented.');
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(userActions.loadUsers());
    }

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(userActions.loadUser({ uid }));
    }

    public dispatchLoadExistedUserAction(user: UserModel): void {
        this.store.dispatch(userActions.loadExistedUser({ user }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(userActions.setSelectedUserId({ userId: entityId }));
    }

    public dispatchUpdateEntityAction(user: UserEntity): void {
        this.store.dispatch(userActions.updateUser({ user }));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(UserSelectors.getUserLoading));
    }

    public selectEntities$(): Observable<UserEntity[]> {
        return this.store.pipe(select(UserSelectors.getAllUser));
    }

    public selectEntityById$(entityId: string): Observable<UserEntity | undefined> {
        return this.store.pipe(select(UserSelectors.selectUserById(), { userId: entityId }));
    }

    public selectSelectedEntity$(): Observable<UserEntity | undefined> {
        return this.store.pipe(select(UserSelectors.selectUser));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(UserSelectors.getSelectedId));
    }
}
