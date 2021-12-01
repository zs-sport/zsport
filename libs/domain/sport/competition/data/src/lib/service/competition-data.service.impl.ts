import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {
    COMPETITION_FEATURE_KEY,
    CompetitionDataService,
    CompetitionModel,
    Event,
    EVENT_FEATURE_KEY,
    EventModel,
} from '@zsport/api';

@Injectable()
export class CompetitionDataServiceImpl extends CompetitionDataService {
    protected competitionCollection: AngularFirestoreCollection<CompetitionModel>;
    protected competitions$: Observable<CompetitionModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.competitionCollection = angularFirestore.collection<CompetitionModel>(COMPETITION_FEATURE_KEY);
        this.competitions$ = this.competitionCollection.valueChanges();
    }

    public add$(competition: CompetitionModel): Observable<CompetitionModel> {
        const newId = this.angularFirestore.createId();

        competition.uid = newId;

        this.competitionCollection.doc(newId).set(competition, { merge: true });

        return new Observable<CompetitionModel>((observer) => {
            observer.next(competition);
        });
    }

    public addEventByCompetitionId(event: EventModel): Observable<EventModel> {
        const newId = this.angularFirestore.createId();

        event = { ...event, uid: newId };

        this.competitionCollection
            .doc(event.competitionId)
            .collection(EVENT_FEATURE_KEY)
            .doc(newId)
            .set(event, { merge: true });

        return new Observable<EventModel>((observer) => {
            observer.next(event);
        });
    }

    public delete$(competition: CompetitionModel): Observable<CompetitionModel> {
        this.angularFirestore.doc<CompetitionModel>(COMPETITION_FEATURE_KEY + '/' + competition.uid);

        return new Observable<CompetitionModel>((observer) => {
            observer.next(competition);
        });
    }

    public list$(): Observable<CompetitionModel[]> {
        return this.competitions$;
    }

    public listEventsByCompetitionId(competitionId: string): Observable<EventModel[]> {
        return new Observable<EventModel[]>((observer) => {
            const competitionDocument = this.angularFirestore.doc<CompetitionModel>(
                COMPETITION_FEATURE_KEY + '/' + competitionId
            );

            competitionDocument
                .collection(EVENT_FEATURE_KEY)
                .valueChanges()
                .subscribe((values) => {
                    const events: EventModel[] = [];

                    values.map((item) => events.push(item as EventModel));

                    observer.next(events);
                });
        });
    }

    public load$(uid: string): Observable<CompetitionModel> {
        return new Observable<CompetitionModel>((observer) => {
            const competitionDocument = this.angularFirestore.doc<CompetitionModel>(
                COMPETITION_FEATURE_KEY + '/' + uid
            );

            competitionDocument.valueChanges().pipe(
                map((competition) => {
                    if (competition) {
                        return { ...competition, uid: uid };
                    } else {
                        throw new Error('Competition loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(competition: CompetitionModel): Observable<CompetitionModel> {
        const competitionDocument = this.angularFirestore.doc<CompetitionModel>(
            COMPETITION_FEATURE_KEY + '/' + competition.uid
        );

        competitionDocument.set(competition, { merge: true });

        return new Observable<CompetitionModel>((observer) => {
            observer.next(competition);
        });
    }

    public updateEventByCompetitionId(eventModel: EventModel): Observable<EventModel> {
        const competitionId = eventModel.competitionId;
        const eventDocument = this.competitionCollection
            .doc(competitionId)
            .collection(EVENT_FEATURE_KEY)
            .doc(eventModel.uid || '');

        eventDocument.set(eventModel, { merge: true });

        return new Observable<EventModel>((observer) => {
            observer.next(eventModel);
        });
    }
}
