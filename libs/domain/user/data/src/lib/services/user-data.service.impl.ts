import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { UserDataService, UserModel } from '@zsport/api';

@Injectable()
export class UserDataServiceImpl extends UserDataService {
    private userCollection: AngularFirestoreCollection<UserModel>;
    private users$: Observable<UserModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.userCollection = angularFirestore.collection<UserModel>('user');

        this.users$ = this.userCollection.valueChanges();
    }

    public add$(userModel: UserModel): Observable<UserModel> {
        this.userCollection.doc(userModel.uid || '').set(userModel, { merge: true });

        return new Observable<UserModel>((observer) => {
            observer.next(userModel);
        });
    }

    public delete$(userModel: UserModel): Observable<UserModel> {
        this.angularFirestore.doc<UserModel>('user/' + userModel.uid);

        return new Observable<UserModel>((observer) => {
            observer.next(userModel);
        });
    }

    public list$(): Observable<UserModel[]> {
        return this.users$;
    }

    public load$(uid: string): Observable<UserModel> {
        const userDocument = this.angularFirestore.doc<UserModel>('user/' + uid);

        return userDocument.valueChanges().pipe(
            map((user) => {
                if (user) {
                    return { ...user, uid: uid };
                } else {
                    return { uid: '' };
                }
            })
        );
    }

    public update$(userModel: UserModel): Observable<UserModel> {
        const userDocument = this.angularFirestore.doc<UserModel>('user/' + userModel.uid);

        userDocument.set(userModel, { merge: true });

        return of(userModel);
    }
}
