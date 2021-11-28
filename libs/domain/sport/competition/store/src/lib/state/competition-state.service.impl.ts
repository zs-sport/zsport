import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CompetitionEntity, CompetitionStateService, Entity, EventEntity } from '@zsport/api';

import * as competitionActions from './competition.actions';
import * as competitionSelectors from './competition.selectors';
import { CompetitionState } from './competition.reducer';

@Injectable()
export class CompetitionStateServiceImpl extends CompetitionStateService {
    public constructor(private store: Store<CompetitionState>) {
        super();
    }

    public dispatchAddEntityAction(competition: CompetitionEntity): void {
        this.store.dispatch(competitionActions.addCompetition({ competition: competition }));
    }

    public dispatchAddEventByCompetitionId(event: EventEntity): void {
        this.store.dispatch(competitionActions.addEventByCompetitionId({ event }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        throw new Error('Method not implemented.');
    }

    public dispatchChangeSelectedfinalTabId(selectedFinalTabId: number): void {
        throw new Error('Method not implemented.');
    }

    public dispatchDeleteEntityAction(competitionId: string): void {
        this.store.dispatch(competitionActions.deleteCompetition({ competitionId }));
    }

    public dispatchListEntitiesAction(): void {
        throw new Error('Method not implemented.');
    }

    public dispatchListEventesByCompetitionId(competitionId: string): void {
        this.store.dispatch(competitionActions.listEventesByCompetitionId({ competitionId }));
    }

    public dispatchLoadAction(): void {
        this.store.dispatch(competitionActions.loadCompetitions());
    }

    public dispatchLoadEntitiesAction(): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        throw new Error('Method not implemented.');
    }

    public dispatchSelectCompetitionAction(uid: string): void {
        this.store.dispatch(competitionActions.selectCompetition({ competitionId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        throw new Error('Method not implemented.');
    }

    public dispatchUpdateAction(competition: CompetitionEntity): void {
        this.store.dispatch(competitionActions.updateCompetition({ competition: competition }));
    }

    public dispatchUpdateEntityAction(entity: Entity): void {
        throw new Error('Method not implemented.');
    }

    public dispatchUpdateEventByCompetitionId(event: EventEntity): void {
        this.store.dispatch(competitionActions.updateEvent({ event }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<Array<CompetitionEntity>> {
        return this.store.pipe(select(competitionSelectors.selectAllCompetition));
    }

    public selectEntity$(): Observable<CompetitionEntity | undefined> {
        return this.store.pipe(select(competitionSelectors.selectCompetition));
    }

    public selectEntityById$(entityId: string): Observable<Entity | undefined> {
        return this.store.pipe(select(competitionSelectors.selectCompetitionById, { competitionId: entityId }));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectSelectedEntity$(): Observable<Entity> {
        throw new Error('Method not implemented.');
    }

    public selectSelectedEntityID$(): Observable<string> {
        throw new Error('Method not implemented.');
    }

    public selectSelectedFinalTabId$(): Observable<number> {
        throw new Error('Method not implemented.');
    }
}
