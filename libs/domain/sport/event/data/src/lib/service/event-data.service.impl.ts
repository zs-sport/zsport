import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {
    DateUtilService,
    EVENT_FEATURE_KEY,
    EventDataService,
    EventModel,
    EventTeam,
    RESULT_FEATURE_KEY,
    ResultModel,
    TEAM_FEATURE_KEY,
    ResultEntity,
} from '@zsport/api';

@Injectable()
export class EventDataServiceImpl extends EventDataService {
    private eventCollectionsByDay: Map<number, Observable<EventModel[]>>;

    protected eventCollection: AngularFirestoreCollection<EventModel>;
    protected events$: Observable<EventModel[]>;

    public constructor(private angularFirestore: AngularFirestore, private dateUtilService: DateUtilService) {
        super();

        this.eventCollection = angularFirestore.collection<EventModel>(EVENT_FEATURE_KEY);
        this.eventCollectionsByDay = new Map<number, Observable<EventModel[]>>();

        this.events$ = this.eventCollection.valueChanges();
    }

    public add$(event: EventModel): Observable<EventModel> {
        const newId = this.angularFirestore.createId();

        event.uid = newId;

        this.eventCollection.doc(newId).set(event, { merge: true });

        return new Observable<EventModel>((observer) => {
            observer.next(event);
        });
    }

    public addResultByEventId(resultModel: ResultModel, eventId: string): Observable<ResultModel> {
        const newId = this.angularFirestore.createId();

        resultModel = { ...resultModel, uid: newId };

        this.eventCollection.doc(eventId).collection(RESULT_FEATURE_KEY).doc(newId).set(resultModel, { merge: true });

        return new Observable<ResultModel>((observer) => {
            observer.next(resultModel);
        });
    }

    public delete$(event: EventModel): Observable<EventModel> {
        this.angularFirestore.doc<EventModel>(EVENT_FEATURE_KEY + '/' + event.uid);

        return new Observable<EventModel>((observer) => {
            observer.next(event);
        });
    }

    public list$(): Observable<EventModel[]> {
        return this.events$;
    }

    public listByDay$(day: Date): Observable<EventModel[]> {
        const dayTime = day.getTime();
        const nextDay = this.dateUtilService.getNextDay(day).getTime();

        let eventCollectionByDay = this.eventCollectionsByDay.get(dayTime);

        if (!eventCollectionByDay) {
            eventCollectionByDay = this.angularFirestore
                .collectionGroup<EventModel>('event', (reference) =>
                    reference.where('eventDayTime', '>', dayTime).where('eventDayTime', '<=', nextDay)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.eventCollectionsByDay.set(dayTime, eventCollectionByDay);
        }

        return eventCollectionByDay;
    }

    public listEventTeamsByEventId(eventId: string): Observable<EventTeam[]> {
        return new Observable<EventTeam[]>((observer) => {
            const eventDocument = this.angularFirestore.doc<EventModel>(EVENT_FEATURE_KEY + '/' + eventId);

            eventDocument
                .collection(TEAM_FEATURE_KEY)
                .valueChanges()
                .subscribe((values) => {
                    const eventTeams: EventTeam[] = [];

                    values.map((item) => eventTeams.push(item as EventTeam));

                    observer.next(eventTeams);
                });
        });
    }

    public listResultsByEventId(eventId: string): Observable<ResultModel[]> {
        return new Observable<ResultModel[]>((observer) => {
            const eventDocument = this.angularFirestore.doc<EventModel>(EVENT_FEATURE_KEY + '/' + eventId);

            eventDocument
                .collection(RESULT_FEATURE_KEY)
                .valueChanges()
                .subscribe((values) => {
                    const results: ResultModel[] = [];

                    values.map((item) => results.push(item as ResultModel));

                    observer.next(results);
                });
        });
    }

    public load$(uid: string): Observable<EventModel> {
        return new Observable<EventModel>((observer) => {
            const eventDocument = this.angularFirestore.doc<EventModel>(EVENT_FEATURE_KEY + '/' + uid);

            eventDocument.valueChanges().pipe(
                map((event) => {
                    if (event) {
                        return { ...Event, uid: uid };
                    } else {
                        throw new Error('Event loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(event: EventModel): Observable<EventModel> {
        const eventDocument = this.angularFirestore.doc<EventModel>(EVENT_FEATURE_KEY + '/' + event.uid);

        eventDocument.set(event, { merge: true });

        return new Observable<EventModel>((observer) => {
            observer.next(event);
        });
    }

    public updateEventTeamByEventId(eventTeam: EventTeam, eventId: string): Observable<EventTeam> {
        const eventDocument = this.angularFirestore.doc<EventModel>('event' + '/' + eventId);

        eventDocument
            .collection(TEAM_FEATURE_KEY)
            .doc(eventTeam.uid || '')
            .set(eventTeam, { merge: true });

        return new Observable<EventTeam>((observer) => {
            observer.next(eventTeam);
        });
    }

    public updateResultByEventId(result: ResultModel, eventId: string): Observable<ResultModel> {
        const eventDocument = this.angularFirestore.doc<EventModel>('event' + '/' + eventId);

        eventDocument
            .collection(RESULT_FEATURE_KEY)
            .doc(result.uid || '')
            .set(result, { merge: true });

        return new Observable<ResultModel>((observer) => {
            observer.next(result);
        });
    }
}
