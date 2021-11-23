import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AssociationEntity, AssociationStateService } from '@zsport/api';

import * as associationActions from './association.actions';
import * as fromAssociation from './association.reducer';
import * as associationSelectors from './association.selectors';

@Injectable()
export class AssociationStateServiceImpl extends AssociationStateService {
    public constructor(private store: Store<fromAssociation.AssociationPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: AssociationEntity): void {
        this.store.dispatch(associationActions.addAssociation({ association: entity as AssociationEntity }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(associationActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(uid: string): void {
        this.store.dispatch(associationActions.deleteAssociation({ associationId: uid }));
    }

    public dispatchListAssociationsByCategoryId$(categoryId: string): void {
        this.store.dispatch(associationActions.listAssociationsByCategoryId({ categoryId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(associationActions.listAssociations());
    }

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(associationActions.loadAssociation({ uid }));
    }

    public dispatchSelectAssociationAction(uid: string): void {
        this.store.dispatch(associationActions.selectAssociation({ associationId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(associationActions.setSelectedAssociationId({ associationId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: AssociationEntity): void {
        this.store.dispatch(associationActions.updateAssociation({ association: entity as AssociationEntity }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectAssociationsByCategoryId$(categoryId: string): Observable<AssociationEntity[]> {
        return this.store.pipe(
            select(associationSelectors.selectAssociationsByCategoryId(), {
                categoryId,
            })
        );
    }

    public selectEntities$(): Observable<AssociationEntity[]> {
        return this.store.pipe(select(associationSelectors.selectAllAssociation));
    }

    public selectEntity$(uid: string): Observable<AssociationEntity | undefined> {
        return this.store.pipe(select(associationSelectors.selectAssociationById(), { uid }));
    }

    public selectEntityById$(entityId: string): Observable<AssociationEntity | undefined> {
        throw new Error('Method not implemented.');
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(associationSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<AssociationEntity | undefined> {
        return this.store.pipe(select(associationSelectors.selectSelectedAssociation));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(associationSelectors.getSelectedId));
    }
}
