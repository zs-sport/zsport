import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EventTeam, TeamEntity, TeamStateService } from '@zsport/api';

import * as teamActions from './team.actions';
import * as fromTeam from './team.reducer';
import * as teamSelectors from './team.selectors';

@Injectable()
export class TeamStateServiceImpl extends TeamStateService {
    public constructor(private store: Store<fromTeam.TeamPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: TeamEntity): void {
        this.store.dispatch(teamActions.addTeam({ team: entity }));
    }

    public dispatchAddTeamByClubIdAction(team: TeamEntity, clubId: string): void {
        this.store.dispatch(
            teamActions.addTeamByClubId({
                team,
                clubId,
            })
        );
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(teamActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(teamId: string): void {
        this.store.dispatch(teamActions.deleteTeam({ teamId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(teamActions.listTeams());
    }

    public dispatchListEventTeamsByEventIdAction(eventId: string): void {
        this.store.dispatch(teamActions.listEventTeamsByEventId({ eventId }));
    }

    public dispatchListTeamByAGGCIdAndClubIds(aggcId: string, sportClubIds: string[]): void {
        this.store.dispatch(teamActions.listTeamsByAGGCIdAndClubIds({ aggcId, sportClubIds }));
    }

    public dispatchListTeamsByAGGCId(aggcId: string): void {
        this.store.dispatch(teamActions.listTeamsByAGGCId({ aggcId }));
    }

    public dispatchListTeamsByClubIdAction(clubId: string): void {
        this.store.dispatch(teamActions.listTeamsByClubId({ clubId: clubId }));
    }

    public dispatchLoadEntitiesAction(): void {}

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(teamActions.loadTeam({ uid }));
    }

    public dispatchSelectTeamAction(uid: string): void {
        this.store.dispatch(teamActions.selectTeam({ teamId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(teamActions.setSelectedTeamId({ teamId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: TeamEntity): void {
        this.store.dispatch(teamActions.updateTeam({ team: entity }));
    }

    public dispatchUpdateEventTeamByEventIdAction(eventTeam: EventTeam, eventId: string): void {
        this.store.dispatch(
            teamActions.updateEventTeamByEventId({
                eventTeam,
                eventId,
            })
        );
    }

    public dispatchUpdateTeamByClubIdAction(team: TeamEntity, clubId: string): void {
        this.store.dispatch(
            teamActions.updateTeamByClubId({
                team,
                clubId,
            })
        );
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<TeamEntity[]> {
        return this.store.pipe(select(teamSelectors.selectAllTeam));
    }

    public selectEntitiesByClubId$(clubId: string): Observable<TeamEntity[]> {
        return this.store.pipe(select(teamSelectors.selectTeamsByClubId(), { clubId }));
    }

    public selectEntity$(): Observable<TeamEntity | undefined> {
        return this.store.pipe(select(teamSelectors.selectTeam));
    }

    public selectEntityById$(entityId: string): Observable<TeamEntity> {
        throw new Error('Method not implemented.');
    }

    public selectEventTeamsByEventId$(eventId: string): Observable<TeamEntity[]> {
        return this.store.pipe(select(teamSelectors.selectEventTeamsByEventId(), { eventId }));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(teamSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<TeamEntity | undefined> {
        return this.store.pipe(select(teamSelectors.selectTeam));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(teamSelectors.getSelectedId));
    }

    public selectTeamsByAGGCId$(aggcId: string): Observable<TeamEntity[]> {
        return this.store.pipe(select(teamSelectors.selectTeamsByAGGCId(), { aggcId }));
    }

    public selectTeamsByAGGCIdAndClubIds$(aggcId: string, clubIds: string[]): Observable<TeamEntity[]> {
        return this.store.pipe(select(teamSelectors.selectTeamsByAGGCIdAndClubIds(), { aggcId, clubIds }));
    }
}
