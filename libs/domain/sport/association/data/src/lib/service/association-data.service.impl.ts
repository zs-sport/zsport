import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ASSOCIATION_FEATURE_KEY, AssociationDataService, AssociationModel } from '@zsport/api';

@Injectable()
export class AssociationDataServiceImpl extends AssociationDataService {
    protected associationCollection: AngularFirestoreCollection<AssociationModel>;
    protected associationCollectionByCategoryId: Map<string, Observable<AssociationModel[]>>;
    protected associations$: Observable<AssociationModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.associationCollection = angularFirestore.collection<AssociationModel>(ASSOCIATION_FEATURE_KEY);
        this.associationCollectionByCategoryId = new Map();
        this.associations$ = this.associationCollection.valueChanges();
    }

    public add$(association: AssociationModel): Observable<AssociationModel> {
        const newId = this.angularFirestore.createId();

        association.uid = newId;

        this.associationCollection.doc(newId).set(association, { merge: true });

        return new Observable<AssociationModel>((observer) => {
            observer.next(association);
        });
    }

    public delete$(association: AssociationModel): Observable<AssociationModel> {
        this.angularFirestore.doc<AssociationModel>(ASSOCIATION_FEATURE_KEY + '/' + association.uid);

        return new Observable<AssociationModel>((observer) => {
            observer.next(association);
        });
    }

    public list$(): Observable<AssociationModel[]> {
        return this.associations$;
    }

    public listAssociationsByCategoryId(categoryId: string): Observable<AssociationModel[]> {
        let associationCollectionByCategoryId = this.associationCollectionByCategoryId.get(categoryId);

        if (!associationCollectionByCategoryId) {
            associationCollectionByCategoryId = this.angularFirestore
                .collection<AssociationModel>(ASSOCIATION_FEATURE_KEY, (reference) =>
                    reference.where('category.uid', '==', categoryId)
                )
                .valueChanges()
                .pipe(takeUntil(this.destroy));

            this.associationCollectionByCategoryId.set(categoryId, associationCollectionByCategoryId);
        }

        return associationCollectionByCategoryId;
    }

    public load$(uid: string): Observable<AssociationModel> {
        return new Observable<AssociationModel>((observer) => {
            const sportAssociationDocument = this.angularFirestore.doc<AssociationModel>(
                ASSOCIATION_FEATURE_KEY + '/' + uid
            );

            sportAssociationDocument.valueChanges().subscribe((value) => {
                if (value) {
                    const associationModel: AssociationModel = { ...value, uid };

                    observer.next(associationModel);
                } else {
                    throw new Error('Customer loading error: ' + uid);
                }
            });
        });
    }

    public update$(association: AssociationModel): Observable<AssociationModel> {
        const associationDocument = this.angularFirestore.doc<AssociationModel>(
            ASSOCIATION_FEATURE_KEY + '/' + association.uid
        );

        associationDocument.set(association, { merge: true });

        return new Observable<AssociationModel>((observer) => {
            observer.next(association);
        });
    }
}
