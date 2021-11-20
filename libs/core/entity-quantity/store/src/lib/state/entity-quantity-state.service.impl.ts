import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EntityQuantityEntity, EntityQuantityStateService } from '@zsport/api';

import * as entityQuantityActions from './entity-quantity.actions';
import * as fromEntityQuantity from './entity-quantity.reducer';
import * as entityQuantitySelectors from './entity-quantity.selectors';

@Injectable()
export class EntityQuantityStateServiceImpl extends EntityQuantityStateService {
    public constructor(private store: Store<fromEntityQuantity.EntityQuantityPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: EntityQuantityEntity): void {
        this.store.dispatch(
            entityQuantityActions.addEntityQuantity({ entityQuantity: entity as EntityQuantityEntity })
        );
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(entityQuantityActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(uid: string): void {
        this.store.dispatch(entityQuantityActions.deleteEntityQuantity({ entityQuantityId: uid }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(entityQuantityActions.listEntityQuantitys());
    }

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(entityQuantityActions.loadEntityQuantity({ uid }));
    }

    public dispatchSearch(term: string): void {
        this.store.dispatch(entityQuantityActions.search({ term }));
    }

    public dispatchSelectEntityQuantityAction(uid: string): void {
        this.store.dispatch(entityQuantityActions.selectEntityQuantity({ entityQuantityId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(entityQuantityActions.setSelectedEntityQuantityId({ entityQuantityId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: EntityQuantityEntity): void {
        this.store.dispatch(
            entityQuantityActions.updateEntityQuantity({ entityQuantity: entity as EntityQuantityEntity })
        );
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<EntityQuantityEntity[]> {
        return this.store.pipe(select(entityQuantitySelectors.selectAllEntityQuantity));
    }

    public selectEntityById$(uid: string): Observable<EntityQuantityEntity | undefined> {
        return this.store.pipe(select(entityQuantitySelectors.selectEntityQuantityById(), { uid }));
    }

    public selectSelectedEntity$(): Observable<EntityQuantityEntity | undefined> {
        return this.store.pipe(select(entityQuantitySelectors.selectEntityQuantity));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(entityQuantitySelectors.getSelectedId));
    }
}
