import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LocationEntity, LocationStateService } from '@zsport/api';

import * as locationActions from './location.actions';
import * as fromLocation from './location.reducer';
import * as locationSelectors from './location.selectors';

@Injectable()
export class LocationStateServiceImpl extends LocationStateService {
    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }
    public constructor(private store: Store<fromLocation.LocationPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: LocationEntity): void {
        this.store.dispatch(locationActions.addLocation({ location: entity }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(locationActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(locationId: string): void {
        this.store.dispatch(locationActions.deleteLocation({ locationId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(locationActions.listLocations());
    }

    public dispatchLoadEntitiesAction(): void {}

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(locationActions.loadLocation({ uid }));
    }

    public dispatchSelectLocationAction(uid: string): void {
        this.store.dispatch(locationActions.selectLocation({ locationId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(locationActions.setSelectedLocationId({ locationId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: LocationEntity): void {
        this.store.dispatch(locationActions.updateLocation({ location: entity }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<LocationEntity[]> {
        return this.store.pipe(select(locationSelectors.selectAllLocation));
    }

    public selectEntity$(uid: string): Observable<LocationEntity | undefined> {
        return this.store.pipe(select(locationSelectors.selectLocation));
    }

    public selectEntityById$(entityId: string): Observable<LocationEntity> {
        throw new Error('Method not implemented.');
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(locationSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<LocationEntity | undefined> {
        return this.store.pipe(select(locationSelectors.selectLocation));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(locationSelectors.getSelectedId));
    }
}
