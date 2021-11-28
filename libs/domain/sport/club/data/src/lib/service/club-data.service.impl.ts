import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {
    CLUB_FEATURE_KEY,
    ClubDataService,
    ClubEntity,
    ClubModel,
    PLAYER_FEATURE_KEY,
    PlayerEntity,
    PlayerModel,
    TEAM_FEATURE_KEY,
    TeamModel,
} from '@zsport/api';

@Injectable()
export class ClubDataServiceImpl extends ClubDataService {
    protected clubCollection: AngularFirestoreCollection<ClubModel>;
    protected clubCollectionsByACGAIds: Map<string, Observable<ClubModel[]>>;
    protected clubCollectionsByCategoryId: Map<string, Observable<ClubModel[]>>;
    protected clubs$: Observable<ClubModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.clubCollection = angularFirestore.collection<ClubModel>(CLUB_FEATURE_KEY);
        this.clubCollectionsByCategoryId = new Map<string, Observable<ClubModel[]>>();
        this.clubCollectionsByACGAIds = new Map<string, Observable<ClubModel[]>>();
        this.clubs$ = this.clubCollection.valueChanges();
    }

    public add$(club: ClubModel): Observable<ClubModel> {
        const newId = this.angularFirestore.createId();

        club.uid = newId;

        this.clubCollection.doc(newId).set(club, { merge: true });

        return new Observable<ClubModel>((observer) => {
            observer.next(club);
        });
    }

    public addPlayerByClubId(playerModel: PlayerModel, clubId: string): Observable<PlayerModel> {
        const newId = this.angularFirestore.createId();

        playerModel = { ...playerModel, uid: newId };

        this.clubCollection.doc(clubId).collection(PLAYER_FEATURE_KEY).doc(newId).set(playerModel, { merge: true });

        return new Observable<PlayerModel>((observer) => {
            observer.next(playerModel);
        });
    }

    public addTeamByClubId(sportTeamModel: TeamModel, clubId: string): Observable<TeamModel> {
        const newId = this.angularFirestore.createId();

        sportTeamModel = { ...sportTeamModel, uid: newId };

        this.clubCollection.doc(clubId).collection(TEAM_FEATURE_KEY).doc(newId).set(sportTeamModel, { merge: true });

        return new Observable<TeamModel>((observer) => {
            observer.next(sportTeamModel);
        });
    }

    public delete$(club: ClubModel): Observable<ClubModel> {
        this.angularFirestore.doc<ClubModel>(CLUB_FEATURE_KEY + '/' + club.uid);

        return new Observable<ClubModel>((observer) => {
            observer.next(club);
        });
    }

    public list$(): Observable<ClubModel[]> {
        return this.clubs$;
    }

    public listClubsByAssociationIdCategoryIdGenderIdAgeGroupId(
        associationId: string,
        categoryId: string,
        genderId: string,
        ageGroupId: string
    ): Observable<ClubModel[]> {
        const id: string =
            associationId + this.SEPARATOR + categoryId + this.SEPARATOR + genderId + this.SEPARATOR + ageGroupId;

        let clubCollectionsByACGAIds = this.clubCollectionsByACGAIds.get(id);

        if (!clubCollectionsByACGAIds) {
            clubCollectionsByACGAIds = this.angularFirestore
                .collection<ClubModel>(CLUB_FEATURE_KEY, (reference) =>
                    reference
                        .where('category.uid', '==', categoryId)
                        .where('association.uid', '==', associationId)
                        .where('gender.uid', '==', genderId)
                        .where('ageGroup.uid', '==', ageGroupId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.clubCollectionsByACGAIds.set(id, clubCollectionsByACGAIds);
        }

        return clubCollectionsByACGAIds;
    }

    public listClubsByCategoryId(categoryId: string): Observable<ClubModel[]> {
        let clubCollectionByCategoryId = this.clubCollectionsByCategoryId.get(categoryId);

        if (!clubCollectionByCategoryId) {
            clubCollectionByCategoryId = this.angularFirestore
                .collection<ClubModel>(CLUB_FEATURE_KEY, (reference) =>
                    reference.where('category.uid', '==', categoryId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.clubCollectionsByCategoryId.set(categoryId, clubCollectionByCategoryId);
        }

        return clubCollectionByCategoryId;
    }

    public listPlayersByClubId(clubId: string): Observable<PlayerEntity[]> {
        return new Observable<PlayerEntity[]>((observer) => {
            const clubDocument = this.angularFirestore.doc<ClubEntity>(CLUB_FEATURE_KEY + '/' + clubId);

            clubDocument
                .collection(PLAYER_FEATURE_KEY)
                .valueChanges()
                .subscribe((values) => {
                    const clubPlayers: PlayerEntity[] = [];

                    values.map((item) => clubPlayers.push(item as PlayerEntity));

                    observer.next(clubPlayers);
                });
        });
    }

    public listTeamsByClubId(clubId: string): Observable<TeamModel[]> {
        return new Observable<TeamModel[]>((observer) => {
            const clubDocument = this.angularFirestore.doc<ClubModel>(CLUB_FEATURE_KEY + '/' + clubId);

            clubDocument
                .collection(TEAM_FEATURE_KEY)
                .valueChanges()
                .subscribe((values) => {
                    const sportTeams: TeamModel[] = [];

                    values.map((item) => sportTeams.push(item as TeamModel));

                    observer.next(sportTeams);
                });
        });
    }

    public load$(uid: string): Observable<ClubModel> {
        return new Observable<ClubModel>((observer) => {
            const clubDocument = this.angularFirestore.doc<ClubModel>(CLUB_FEATURE_KEY + '/' + uid);

            clubDocument.valueChanges().pipe(
                map((club) => {
                    if (club) {
                        return { ...club, uid: uid };
                    } else {
                        throw new Error('Club loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(club: ClubModel): Observable<ClubModel> {
        const clubDocument = this.angularFirestore.doc<ClubModel>(CLUB_FEATURE_KEY + '/' + club.uid);

        clubDocument.set(club, { merge: true });

        return new Observable<ClubModel>((observer) => {
            observer.next(club);
        });
    }

    public updatePlayerByClubId(player: PlayerModel, clubId: string): Observable<PlayerModel> {
        const clubDocument = this.angularFirestore.doc<ClubModel>(CLUB_FEATURE_KEY + '/' + clubId);

        clubDocument
            .collection(PLAYER_FEATURE_KEY)
            .doc(player.uid || '')
            .set(player, { merge: true });

        return new Observable<PlayerModel>((observer) => {
            observer.next(player);
        });
    }

    public updateTeamByClubId(team: TeamModel, clubId: string): Observable<TeamModel> {
        const clubDocument = this.angularFirestore.doc<ClubModel>(CLUB_FEATURE_KEY + '/' + clubId);

        clubDocument
            .collection(TEAM_FEATURE_KEY)
            .doc(team.uid || '')
            .set(team, { merge: true });

        return new Observable<TeamModel>((observer) => {
            observer.next(team);
        });
    }
}
