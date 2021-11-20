import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ENTITY_QUANTITY_FEATURE_KEY, EntityQuantityDataService, EntityQuantityModel } from '@zsport/api';

@Injectable()
export class EntityQuantityDataServiceImpl extends EntityQuantityDataService {
    protected entityQuantityCollection: AngularFirestoreCollection<EntityQuantityModel>;
    protected entityQuantitys$: Observable<EntityQuantityModel[]>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.entityQuantityCollection = angularFirestore.collection<EntityQuantityModel>(ENTITY_QUANTITY_FEATURE_KEY);

        this.entityQuantitys$ = this.entityQuantityCollection.valueChanges();
    }

    public add$(entityQuantity: EntityQuantityModel): Observable<EntityQuantityModel> {
        const newId = entityQuantity.uid || this.angularFirestore.createId();

        entityQuantity = {
            ...entityQuantity,
            uid: newId,
        };

        this.entityQuantityCollection.doc(newId).set(entityQuantity, { merge: true });

        return new Observable<EntityQuantityModel>((observer) => {
            observer.next(entityQuantity);
        });
    }

    public delete$(entityQuantity: EntityQuantityModel): Observable<EntityQuantityModel> {
        this.angularFirestore.doc<EntityQuantityModel>(ENTITY_QUANTITY_FEATURE_KEY + '/' + entityQuantity.uid);

        return new Observable<EntityQuantityModel>((observer) => {
            observer.next(entityQuantity);
        });
    }

    public list$(): Observable<EntityQuantityModel[]> {
        return this.entityQuantitys$;
    }

    public listByIds$(ids: string[]): Observable<EntityQuantityModel[]> {
        return this.angularFirestore
            .collection<EntityQuantityModel>(ENTITY_QUANTITY_FEATURE_KEY, (reference) =>
                reference.where('uid', 'in', ids)
            )
            .valueChanges();
    }

    public load$(uid: string): Observable<EntityQuantityModel> {
        const entityQuantityDocument = this.angularFirestore.doc<EntityQuantityModel>(
            ENTITY_QUANTITY_FEATURE_KEY + '/' + uid
        );

        return entityQuantityDocument.valueChanges().pipe(
            map((entityQuantity) => {
                if (entityQuantity) {
                    return { ...entityQuantity, uid: uid };
                } else {
                    throw new Error('Customer loading error: ' + uid);
                }
            })
        );
    }

    public search$(param: string): Observable<EntityQuantityModel[]> {
        return this.angularFirestore
            .collection<EntityQuantityModel>(ENTITY_QUANTITY_FEATURE_KEY, (reference) =>
                reference
                    .orderBy('drawingNumber')
                    .startAt(param)
                    .endAt(param + '\uf8ff')
                    .limit(10)
            )
            .valueChanges();
    }

    public update$(entityQuantity: EntityQuantityModel): Observable<EntityQuantityModel> {
        const entityQuantityDocument = this.angularFirestore.doc<EntityQuantityModel>(
            ENTITY_QUANTITY_FEATURE_KEY + '/' + entityQuantity.uid
        );

        entityQuantityDocument.set(entityQuantity, { merge: true });

        return new Observable<EntityQuantityModel>((observer) => {
            observer.next(entityQuantity);
        });
    }
}
