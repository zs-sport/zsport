import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { I18nService, ROLE_FEATURE_KEY, RoleDataService, RoleModel } from '@zsport/api';

@Injectable()
export class RoleDataServiceImpl extends RoleDataService {
    protected roleCollection: AngularFirestoreCollection<RoleModel>;
    protected roles$: Observable<RoleModel[]>;

    public constructor(private angularFirestore: AngularFirestore, private i18NService: I18nService) {
        super();

        this.roleCollection = angularFirestore.collection<RoleModel>(ROLE_FEATURE_KEY);
        this.roles$ = this.roleCollection.valueChanges();
    }

    public add$(role: RoleModel): Observable<RoleModel> {
        const newId = this.angularFirestore.createId();

        role = {
            ...role,
            uid: newId,
        };

        this.roleCollection.doc(newId).set(role, { merge: true });

        return new Observable<RoleModel>((observer) => {
            observer.next(role);
        });
    }

    public delete$(role: RoleModel): Observable<RoleModel> {
        this.angularFirestore.doc<RoleModel>(ROLE_FEATURE_KEY + '/' + role.uid);

        return new Observable<RoleModel>((observer) => {
            observer.next(role);
        });
    }

    public list$(): Observable<RoleModel[]> {
        return this.roles$;
    }

    public listByIds$(ids: string[]): Observable<RoleModel[]> {
        return this.angularFirestore
            .collection<RoleModel>(ROLE_FEATURE_KEY, (reference) => reference.where('uid', 'in', ids))
            .valueChanges();
    }

    public load$(uid: string): Observable<RoleModel> {
        const roleDocument = this.angularFirestore.doc<RoleModel>(ROLE_FEATURE_KEY + '/' + uid);

        return roleDocument.valueChanges().pipe(
            map((role) => {
                if (role) {
                    return { ...role, uid: uid };
                } else {
                    throw new Error('Customer loading error: ' + uid);
                }
            })
        );
    }

    public update$(role: RoleModel): Observable<RoleModel> {
        const roleDocument = this.angularFirestore.doc<RoleModel>(ROLE_FEATURE_KEY + '/' + role.uid);

        roleDocument.set(role, { merge: true });

        return new Observable<RoleModel>((observer) => {
            observer.next(role);
        });
    }
}
