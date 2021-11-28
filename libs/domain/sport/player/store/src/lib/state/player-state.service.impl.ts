import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EventPlayer, PlayerEntity, PlayerStateService } from '@zsport/api';

import * as playerActions from './player.actions';
import * as fromPlayer from './player.reducer';
import * as playerSelectors from './player.selectors';

@Injectable()
export class PlayerStateServiceImpl extends PlayerStateService {
    public constructor(private store: Store<fromPlayer.PlayerPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: PlayerEntity): void {
        this.store.dispatch(playerActions.addPlayer({ player: entity }));
    }

    public dispatchAddPlayerByClubIdAction(player: PlayerEntity, clubId: string): void {
        this.store.dispatch(
            playerActions.addPlayerByClubId({
                player,
                clubId,
            })
        );
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(playerActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(playerId: string): void {
        this.store.dispatch(playerActions.deletePlayer({ playerId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(playerActions.listPlayers());
    }

    public dispatchListEventPlayersByEventIdAction(eventId: string): void {
        this.store.dispatch(playerActions.listEventPlayersByEventId({ eventId }));
    }

    public dispatchListPlayerByAGGCIdAndClubIds(aggcId: string, sportClubIds: string[]): void {
        this.store.dispatch(playerActions.listPlayersByAGGCIdAndClubIds({ aggcId, sportClubIds }));
    }

    public dispatchListPlayersByAGGCId(aggcId: string): void {
        this.store.dispatch(playerActions.listPlayersByAGGCId({ aggcId }));
    }

    public dispatchListPlayersByClubIdAction(clubId: string): void {
        this.store.dispatch(playerActions.listPlayersByClubId({ clubId: clubId }));
    }

    public dispatchLoadEntitiesAction(): void {}

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(playerActions.loadPlayer({ uid }));
    }

    public dispatchSelectPlayerAction(uid: string): void {
        this.store.dispatch(playerActions.selectPlayer({ playerId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(playerActions.setSelectedPlayerId({ playerId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: PlayerEntity): void {
        this.store.dispatch(playerActions.updatePlayer({ player: entity }));
    }

    public dispatchUpdateEventPlayerByEventIdAction(eventPlayer: EventPlayer, eventId: string): void {
        this.store.dispatch(
            playerActions.updateEventPlayerByEventId({
                eventPlayer,
                eventId,
            })
        );
    }

    public dispatchUpdatePlayerByClubIdAction(player: PlayerEntity, clubId: string): void {
        this.store.dispatch(
            playerActions.updatePlayerByClubId({
                player,
                clubId,
            })
        );
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectEntities$(): Observable<PlayerEntity[]> {
        return this.store.pipe(select(playerSelectors.selectAllPlayer));
    }

    public selectEntitiesByClubId$(clubId: string): Observable<PlayerEntity[]> {
        return this.store.pipe(select(playerSelectors.selectPlayersByClubId(), { clubId }));
    }

    public selectEntity$(): Observable<PlayerEntity | undefined> {
        return this.store.pipe(select(playerSelectors.selectPlayer));
    }

    public selectEntityById$(entityId: string): Observable<PlayerEntity> {
        throw new Error('Method not implemented.');
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(playerSelectors.isNewEntityButtonEnabled));
    }

    public selectSelectedEntity$(): Observable<PlayerEntity | undefined> {
        return this.store.pipe(select(playerSelectors.selectPlayer));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(playerSelectors.getSelectedId));
    }
}
