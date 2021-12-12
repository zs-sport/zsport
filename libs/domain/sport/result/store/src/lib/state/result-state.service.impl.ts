import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Entity, Result, ResultEntity, ResultStateService } from '@zsport/api';

import * as resultActions from './result.actions';
import * as fromResult from './result.reducer';
import * as resultSelectors from './result.selectors';

@Injectable()
export class ResultStateServiceImpl extends ResultStateService {
    public constructor(private store: Store<fromResult.ResultPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: Entity): void {
        this.store.dispatch(resultActions.addResult({ result: entity as Result }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(resultActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(resultId: string): void {
        this.store.dispatch(resultActions.deleteResult({ resultId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(resultActions.listResults());
    }

    public dispatchListResultsByEventIdAction(eventId: string): void {
        this.store.dispatch(resultActions.listResultsByEventId({ eventId }));
    }

    public dispatchLoadEntitiesAction(): void {}

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(resultActions.loadResult({ uid }));
    }

    public dispatchSelectResultAction(uid: string): void {
        this.store.dispatch(resultActions.selectResult({ resultId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(resultActions.setSelectedResultId({ resultId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: Entity): void {
        this.store.dispatch(resultActions.updateResult({ result: entity as Result }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<Result[]> {
        return this.store.pipe(select(resultSelectors.selectAllResult));
    }

    public selectEntity$(): Observable<Result | undefined> {
        return this.store.pipe(select(resultSelectors.selectResult));
    }

    public selectEntityById$(resultId: string): Observable<Result | undefined> {
        return this.store.pipe(select(resultSelectors.selectResultById(), { resultId }));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(resultSelectors.isNewEntityButtonEnabled));
    }

    public selectResultsByEventId$(eventId: string): Observable<ResultEntity[]> {
        return this.store.pipe(select(resultSelectors.selectResultsByEventId(), { eventId }));
    }

    public selectSelectedEntity$(): Observable<Result | undefined> {
        return this.store.pipe(select(resultSelectors.selectResult));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(resultSelectors.getSelectedId));
    }
}
