import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { CATEGORY_FEATURE_KEY, CategoryDataService, CategoryModel } from '@zsport/api';

@Injectable()
export class CategoryDataServiceImpl extends CategoryDataService {
    protected categories$: Observable<CategoryModel[]>;
    protected categoryCollection: AngularFirestoreCollection<CategoryModel>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.categoryCollection = angularFirestore.collection<CategoryModel>(CATEGORY_FEATURE_KEY);
        this.categories$ = this.categoryCollection.valueChanges();
    }

    public add$(category: CategoryModel): Observable<CategoryModel> {
        const newId = this.angularFirestore.createId();

        category.uid = newId;

        this.categoryCollection.doc(newId).set(category, { merge: true });

        return new Observable<CategoryModel>((observer) => {
            observer.next(category);
        });
    }

    public delete$(category: CategoryModel): Observable<CategoryModel> {
        this.angularFirestore.doc<CategoryModel>(CATEGORY_FEATURE_KEY + '/' + category.uid);

        return new Observable<CategoryModel>((observer) => {
            observer.next(category);
        });
    }

    public list$(): Observable<CategoryModel[]> {
        return this.categories$;
    }

    public load$(uid: string): Observable<CategoryModel> {
        const categoryDocument = this.angularFirestore.doc<CategoryModel>(CATEGORY_FEATURE_KEY + '/' + uid);

        return categoryDocument.valueChanges().pipe(
            map((category) => {
                if (category) {
                    return { ...category, uid: uid };
                } else {
                    throw new Error('Customer loading error: ' + uid);
                }
            })
        );
    }

    public update$(category: CategoryModel): Observable<CategoryModel> {
        const categoryDocument = this.angularFirestore.doc<CategoryModel>(CATEGORY_FEATURE_KEY + '/' + category.uid);

        categoryDocument.set(category, { merge: true });

        return new Observable<CategoryModel>((observer) => {
            observer.next(category);
        });
    }
}
