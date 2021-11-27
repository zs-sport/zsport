import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PersonEntity, PersonStateService } from '@zsport/api';

import * as personActions from './person.actions';
import * as fromPerson from './person.reducer';
import * as personSelectors from './person.selectors';

@Injectable()
export class PersonStateServiceImpl extends PersonStateService {
    public constructor(private store: Store<fromPerson.PersonPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: PersonEntity): void {
        this.store.dispatch(personActions.addPerson({ person: entity }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(personActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(personId: string): void {
        this.store.dispatch(personActions.deletePerson({ personId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(personActions.listPersons());
    }

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(personActions.loadPerson({ uid }));
    }

    public dispatchSelectPersonAction(uid: string): void {
        this.store.dispatch(personActions.selectPerson({ personId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(personActions.setSelectedPersonId({ personId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: PersonEntity): void {
        this.store.dispatch(personActions.updatePerson({ person: entity }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<PersonEntity[]> {
        return this.store.pipe(select(personSelectors.selectAllPerson));
    }

    public selectEntity$(): Observable<PersonEntity | undefined> {
        return this.store.pipe(select(personSelectors.selectPerson));
    }

    public selectEntityById$(entityId: string): Observable<PersonEntity> {
        throw new Error('Method not implemented.');
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(personSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<PersonEntity | undefined> {
        return this.store.pipe(select(personSelectors.selectPerson));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(personSelectors.getSelectedId));
    }
}
