import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DateUtilService, EventEntity, EventStateService } from '@zsport/api';

import * as eventActions from './event.actions';
import * as fromEvent from './event.reducer';
import * as eventSelectors from './event.selectors';

@Injectable()
export class EventStateServiceImpl extends EventStateService {
    public constructor(private store: Store<fromEvent.EventPartialState>, private dateUtilService: DateUtilService) {
        super();
    }

    public dispatchAddEntityAction(entity: EventEntity): void {
        this.store.dispatch(eventActions.addEvent({ event: entity }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(eventActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(eventId: string): void {
        this.store.dispatch(eventActions.deleteEvent({ eventId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(eventActions.listEvents());
    }

    public dispatchListEventsByCompetitionIdSuccess(eventes: EventEntity[]): void {
        this.store.dispatch(eventActions.ListEventesByCompetitionIdSuccess({ eventes }));
    }

    public dispatchListEventsByDay(day: Date): void {
        this.store.dispatch(eventActions.listEventsByDay({ day }));
    }

    public dispatchLoadEntitiesAction(): void {}

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(eventActions.loadEvent({ uid }));
    }

    public dispatchSelectEventAction(uid: string): void {
        this.store.dispatch(eventActions.selectEvent({ eventId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(eventActions.setSelectedEventId({ eventId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: EventEntity): void {
        this.store.dispatch(eventActions.updateEvent({ event: entity }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<EventEntity[]> {
        const values = this.store.pipe(select(eventSelectors.selectAllEvent));

        return values;
    }

    public selectEntity$(): Observable<EventEntity | undefined> {
        return this.store.pipe(select(eventSelectors.selectEvent));
    }

    public selectEntityById$(entityId: string): Observable<EventEntity | undefined> {
        const event$ = this.store.pipe(select(eventSelectors.selectEvent));

        eventSelectors.selectEvent.release();

        return event$;
    }

    public selectEventsByCompetitionId(competitionId: string): Observable<EventEntity[]> {
        return this.store.pipe(select(eventSelectors.selectEventsByCompetitionId(), { competitionId }));
    }

    public selectEventsByDay$(day: Date): Observable<EventEntity[]> {
        return this.store.pipe(
            select(eventSelectors.selectEventsByDay(), { day, nextDay: this.dateUtilService.getNextDay(day) })
        );
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(eventSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<EventEntity | undefined> {
        return this.store.pipe(select(eventSelectors.selectEvent));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(eventSelectors.getSelectedId));
    }
}
