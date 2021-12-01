import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Competition, CompetitionStateService, Entity, Event } from '@zsport/api';

import * as competitionActions from './competition.actions';
import * as fromCompetition from './competition.reducer';
import * as competitionSelectors from './competition.selectors';

@Injectable()
export class CompetitionStateServiceImpl extends CompetitionStateService {
    public constructor(private store: Store<fromCompetition.CompetitionPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: Entity): void {
        this.store.dispatch(competitionActions.addCompetition({ competition: entity as Competition }));
    }

    public dispatchAddEventByCompetitionId(event: Event): void {
        this.store.dispatch(competitionActions.addEventByCompetitionId({ event }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(competitionActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchChangeSelectedfinalTabId(selectedFinalTabId: number): void {
        this.store.dispatch(competitionActions.changeSelectedFinalTabId({ selectedFinalTabId }));
    }

    public dispatchDeleteEntityAction(competitionId: string): void {
        this.store.dispatch(competitionActions.deleteCompetition({ competitionId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(competitionActions.listCompetitions());
    }

    public dispatchListEventsByCompetitionId(competitionId: string): void {
        this.store.dispatch(competitionActions.listEventsByCompetitionId({ competitionId }));
    }

    public dispatchLoadEntitiesAction(): void {}

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(competitionActions.loadCompetition({ uid }));
    }

    public dispatchSelectCompetitionAction(uid: string): void {
        this.store.dispatch(competitionActions.selectCompetition({ competitionId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(competitionActions.setSelectedCompetitionId({ competitionId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: Entity): void {
        this.store.dispatch(competitionActions.updateCompetition({ competition: entity as Competition }));
    }

    public dispatchUpdateEventByCompetitionId(event: Event): void {
        this.store.dispatch(competitionActions.updateEventByCompetitionId({ event }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<Entity[]> {
        return this.store.pipe(select(competitionSelectors.selectAllCompetition));
    }

    public selectEntity$(): Observable<Entity | undefined> {
        return this.store.pipe(select(competitionSelectors.selectCompetition));
    }

    public selectEntityById$(entityId: string): Observable<Entity> {
        throw new Error('Method not implemented.');
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(competitionSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<Entity | undefined> {
        return this.store.pipe(select(competitionSelectors.selectCompetition));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(competitionSelectors.getSelectedId));
    }

    public selectSelectedFinalTabId$(): Observable<number> {
        return this.store.pipe(select(competitionSelectors.selectSelectedFinalTabId));
    }
}
