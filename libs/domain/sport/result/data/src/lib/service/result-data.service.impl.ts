import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Result, RESULT_FEATURE_KEY, ResultDataService, ResultModel } from '@zsport/api';

@Injectable()
export class ResultDataServiceImpl extends ResultDataService {
    protected resultCollection: AngularFirestoreCollection<ResultModel>;
    protected results$: Observable<ResultModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.resultCollection = angularFirestore.collection<ResultModel>(RESULT_FEATURE_KEY);

        this.results$ = this.resultCollection.valueChanges();
    }

    public add$(result: Result): Observable<ResultModel> {
        const newId = this.angularFirestore.createId();

        result.uid = newId;

        this.resultCollection.doc(newId).set(result, { merge: true });

        return new Observable<ResultModel>((observer) => {
            observer.next(result);
        });
    }

    public delete$(result: Result): Observable<ResultModel> {
        this.angularFirestore.doc<Result>(RESULT_FEATURE_KEY + '/' + result.uid);

        return new Observable<ResultModel>((observer) => {
            observer.next(result);
        });
    }

    public list$(): Observable<ResultModel[]> {
        return this.results$;
    }

    public load$(uid: string): Observable<ResultModel> {
        return new Observable<Result>((observer) => {
            const resultDocument = this.angularFirestore.doc<ResultModel>(RESULT_FEATURE_KEY + '/' + uid);

            resultDocument.valueChanges().pipe(
                map((result) => {
                    if (result) {
                        return { ...result, uid: uid };
                    } else {
                        throw new Error('Result loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(result: Result): Observable<ResultModel> {
        const resultDocument = this.angularFirestore.doc<ResultModel>(RESULT_FEATURE_KEY + '/' + result.uid);

        resultDocument.set(result, { merge: true });

        return new Observable<ResultModel>((observer) => {
            observer.next(result);
        });
    }
}
