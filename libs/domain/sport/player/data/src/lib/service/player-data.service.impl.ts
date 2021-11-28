import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { EventPlayer, Player, PLAYER_FEATURE_KEY, PlayerDataService, PlayerModel } from '@zsport/api';

@Injectable()
export class PlayerDataServiceImpl extends PlayerDataService {
    private eventPlayerCollectionsByEventId: Map<string, Observable<EventPlayer[]>>;
    private playerCollectionsByAGGCId: Map<string, Observable<PlayerModel[]>>;
    private playerCollectionsByAGGCIdAndClubId: Map<string, Observable<PlayerModel[]>>;

    protected readonly MATCH_TEAM_PATH = 'eventPlayer';

    protected playerCollection: AngularFirestoreCollection<PlayerModel>;
    protected players$: Observable<PlayerModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.playerCollection = angularFirestore.collection<PlayerModel>(PLAYER_FEATURE_KEY);
        this.playerCollectionsByAGGCId = new Map<string, Observable<PlayerModel[]>>();
        this.playerCollectionsByAGGCIdAndClubId = new Map<string, Observable<PlayerModel[]>>();
        this.eventPlayerCollectionsByEventId = new Map<string, Observable<EventPlayer[]>>();

        this.players$ = this.playerCollection.valueChanges();
    }

    public add$(playerModel: PlayerModel): Observable<PlayerModel> {
        const newId = this.angularFirestore.createId();

        playerModel.uid = newId;

        this.playerCollection.doc(newId).set(playerModel, { merge: true });

        return new Observable<PlayerModel>((observer) => {
            observer.next(playerModel);
        });
    }

    public delete$(playerModel: PlayerModel): Observable<PlayerModel> {
        this.angularFirestore.doc<PlayerModel>(PLAYER_FEATURE_KEY + '/' + playerModel.uid);

        return new Observable<PlayerModel>((observer) => {
            observer.next(playerModel);
        });
    }

    public list$(): Observable<PlayerModel[]> {
        return this.players$;
    }

    public listEventPlayersByEventId(eventId: string): Observable<EventPlayer[]> {
        let eventPlayerCollectionByClubId = this.eventPlayerCollectionsByEventId.get(eventId);

        if (!eventPlayerCollectionByClubId) {
            eventPlayerCollectionByClubId = this.angularFirestore
                .collectionGroup<EventPlayer>(this.MATCH_TEAM_PATH, (reference) =>
                    reference.where('eventId', '==', eventId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.eventPlayerCollectionsByEventId.set(eventId, eventPlayerCollectionByClubId);
        }

        return eventPlayerCollectionByClubId;
    }

    public listPlayerByAGGCIdAndClubId(aggcId: string, clubId: string): Observable<PlayerModel[]> {
        let playerCollectionByAGGCIdAndClubId = this.playerCollectionsByAGGCIdAndClubId.get(aggcId + clubId);

        if (!playerCollectionByAGGCIdAndClubId) {
            playerCollectionByAGGCIdAndClubId = this.angularFirestore
                .collectionGroup<PlayerModel>(PLAYER_FEATURE_KEY, (reference) =>
                    reference.where(this.AGE_GROUP_GENDER_CATEGORY, '==', aggcId).where('club.uid', '==', clubId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.playerCollectionsByAGGCIdAndClubId.set(aggcId + clubId, playerCollectionByAGGCIdAndClubId);
        }

        return playerCollectionByAGGCIdAndClubId;
    }

    public listPlayersByAGGCId(aggcId: string): Observable<PlayerModel[]> {
        let playerCollectionByAGGCId = this.playerCollectionsByAGGCId.get(aggcId);

        if (!playerCollectionByAGGCId) {
            playerCollectionByAGGCId = this.angularFirestore
                .collectionGroup<PlayerModel>(PLAYER_FEATURE_KEY, (reference) =>
                    reference.where(this.AGE_GROUP_GENDER_CATEGORY, '==', aggcId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.playerCollectionsByAGGCId.set(aggcId, playerCollectionByAGGCId);
        }

        return playerCollectionByAGGCId;
    }

    public load$(uid: string): Observable<PlayerModel> {
        return new Observable<PlayerModel>((observer) => {
            const playerDocument = this.angularFirestore.doc<PlayerModel>(PLAYER_FEATURE_KEY + '/' + uid);

            playerDocument.valueChanges().pipe(
                map((player) => {
                    if (player) {
                        return { ...player, uid: uid };
                    } else {
                        throw new Error('Player loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(playerModel: PlayerModel): Observable<PlayerModel> {
        const playerDocument = this.angularFirestore.doc<PlayerModel>(PLAYER_FEATURE_KEY + '/' + playerModel.uid);

        playerDocument.set(playerModel, { merge: true });

        return new Observable<PlayerModel>((observer) => {
            observer.next(playerModel);
        });
    }
}
