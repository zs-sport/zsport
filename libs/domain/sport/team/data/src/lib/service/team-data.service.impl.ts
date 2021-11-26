import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { EventTeam, TEAM_FEATURE_KEY, TeamDataService, TeamModel } from '@zsport/api';

@Injectable()
export class TeamDataServiceImpl extends TeamDataService {
    private eventTeamCollectionsByEventId: Map<string, Observable<EventTeam[]>>;
    private teamCollectionsByAGGCId: Map<string, Observable<TeamModel[]>>;
    private teamCollectionsByAGGCIdAndClubId: Map<string, Observable<TeamModel[]>>;

    protected readonly EVENT_TEAM_PATH = 'eventTeam';

    protected teamCollection: AngularFirestoreCollection<TeamModel>;
    protected teams$: Observable<TeamModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.teamCollection = angularFirestore.collection<TeamModel>(TEAM_FEATURE_KEY);
        this.teamCollectionsByAGGCId = new Map<string, Observable<TeamModel[]>>();
        this.teamCollectionsByAGGCIdAndClubId = new Map<string, Observable<TeamModel[]>>();
        this.eventTeamCollectionsByEventId = new Map<string, Observable<EventTeam[]>>();

        this.teams$ = this.teamCollection.valueChanges();
    }

    public add$(teamModel: TeamModel): Observable<TeamModel> {
        const newId = this.angularFirestore.createId();

        teamModel.uid = newId;

        this.teamCollection.doc(newId).set(teamModel, { merge: true });

        return new Observable<TeamModel>((observer) => {
            observer.next(teamModel);
        });
    }

    public delete$(teamModel: TeamModel): Observable<TeamModel> {
        this.angularFirestore.doc<TeamModel>(TEAM_FEATURE_KEY + '/' + teamModel.uid);

        return new Observable<TeamModel>((observer) => {
            observer.next(teamModel);
        });
    }

    public list$(): Observable<TeamModel[]> {
        return this.teams$;
    }

    public listEventTeamsByEventId(eventId: string): Observable<EventTeam[]> {
        let eventTeamCollectionByEventId = this.eventTeamCollectionsByEventId.get(eventId);

        if (!eventTeamCollectionByEventId) {
            eventTeamCollectionByEventId = this.angularFirestore
                .collectionGroup<EventTeam>(TEAM_FEATURE_KEY, (reference) => reference.where('eventId', '==', eventId))
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.eventTeamCollectionsByEventId.set(eventId, eventTeamCollectionByEventId);
        }

        return eventTeamCollectionByEventId;
    }

    public listTeamByAGGCIdAndClubId(aggcId: string, clubId: string): Observable<TeamModel[]> {
        let teamCollectionByAGGCIdAndClubId = this.teamCollectionsByAGGCIdAndClubId.get(aggcId + clubId);

        if (!teamCollectionByAGGCIdAndClubId) {
            teamCollectionByAGGCIdAndClubId = this.angularFirestore
                .collectionGroup<TeamModel>(TEAM_FEATURE_KEY, (reference) =>
                    reference.where(this.AGE_GROUP_GENDER_CATEGORY, '==', aggcId).where('club.uid', '==', clubId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.teamCollectionsByAGGCIdAndClubId.set(aggcId + clubId, teamCollectionByAGGCIdAndClubId);
        }

        return teamCollectionByAGGCIdAndClubId;
    }

    public listTeamsByAGGCId(aggcId: string): Observable<TeamModel[]> {
        let teamCollectionByAGGCId = this.teamCollectionsByAGGCId.get(aggcId);

        if (!teamCollectionByAGGCId) {
            teamCollectionByAGGCId = this.angularFirestore
                .collectionGroup<TeamModel>(TEAM_FEATURE_KEY, (reference) =>
                    reference.where(this.AGE_GROUP_GENDER_CATEGORY, '==', aggcId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.teamCollectionsByAGGCId.set(aggcId, teamCollectionByAGGCId);
        }

        return teamCollectionByAGGCId;
    }

    public load$(uid: string): Observable<TeamModel> {
        return new Observable<TeamModel>((observer) => {
            const teamDocument = this.angularFirestore.doc<TeamModel>(TEAM_FEATURE_KEY + '/' + uid);

            teamDocument.valueChanges().pipe(
                map((team) => {
                    if (team) {
                        return { ...team, uid: uid };
                    } else {
                        throw new Error('Customer loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(teamModel: TeamModel): Observable<TeamModel> {
        const teamDocument = this.angularFirestore.doc<TeamModel>(TEAM_FEATURE_KEY + '/' + teamModel.uid);

        teamDocument.set(teamModel, { merge: true });

        return new Observable<TeamModel>((observer) => {
            observer.next(teamModel);
        });
    }
}
