import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { PERSON_FEATURE_KEY, PersonDataService, PersonModel } from '@zsport/api';

@Injectable()
export class PersonDataServiceImpl extends PersonDataService {
    protected personCollection: AngularFirestoreCollection<PersonModel>;
    protected persons$: Observable<PersonModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.personCollection = angularFirestore.collection<PersonModel>(PERSON_FEATURE_KEY);
        this.persons$ = this.personCollection.valueChanges();
    }

    public add$(person: PersonModel): Observable<PersonModel> {
        const newId = this.angularFirestore.createId();

        person.uid = newId;

        this.personCollection.doc(newId).set(person, { merge: true });

        return new Observable<PersonModel>((observer) => {
            observer.next(person);
        });
    }

    public delete$(person: PersonModel): Observable<PersonModel> {
        this.angularFirestore.doc<PersonModel>(PERSON_FEATURE_KEY + '/' + person.uid);

        return new Observable<PersonModel>((observer) => {
            observer.next(person);
        });
    }

    public list$(): Observable<PersonModel[]> {
        return this.persons$;
    }

    public load$(uid: string): Observable<PersonModel> {
        return new Observable<PersonModel>((observer) => {
            const personDocument = this.angularFirestore.doc<PersonModel>(PERSON_FEATURE_KEY + '/' + uid);

            personDocument.valueChanges().pipe(
                map((person) => {
                    if (person) {
                        return { ...person, uid: uid };
                    } else {
                        throw new Error('Person loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(person: PersonModel): Observable<PersonModel> {
        const personDocument = this.angularFirestore.doc<PersonModel>(PERSON_FEATURE_KEY + '/' + person.uid);

        personDocument.set(person, { merge: true });

        return new Observable<PersonModel>((observer) => {
            observer.next(person);
        });
    }
}
