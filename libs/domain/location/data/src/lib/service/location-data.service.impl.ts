import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { I18nService, LocationDataService, LocationModel, LOCATION_FEATURE_KEY } from '@zsport/api';

@Injectable()
export class LocationDataServiceImpl extends LocationDataService {
    protected locationCollection: AngularFirestoreCollection<LocationModel>;
    protected locations$: Observable<LocationModel[]>;
    protected locationCollectionsByCountryId: Map<string, Observable<LocationModel[]>>;

    public constructor(private angularFirestore: AngularFirestore) {
        super();

        this.locationCollection = angularFirestore.collection<LocationModel>(LOCATION_FEATURE_KEY);
        this.locations$ = this.locationCollection.valueChanges();
        this.locationCollectionsByCountryId = new Map<string, Observable<LocationModel[]>>();
    }

    public add$(location: LocationModel): Observable<LocationModel> {
        const newId = this.angularFirestore.createId();

        location.uid = newId;

        this.locationCollection.doc(newId).set(location, { merge: true });

        return new Observable<LocationModel>((observer) => {
            observer.next(location);
        });
    }

    public delete$(location: LocationModel): Observable<LocationModel> {
        this.angularFirestore.doc<LocationModel>(LOCATION_FEATURE_KEY + '/' + location.uid);

        return new Observable<LocationModel>((observer) => {
            observer.next(location);
        });
    }

    public list$(): Observable<LocationModel[]> {
        return this.locations$;
    }

    public listLocationsByCountryId$(countryId: string): Observable<LocationModel[]> {
        let locationCollectionByCountryId = this.locationCollectionsByCountryId.get(countryId);

        if (!locationCollectionByCountryId) {
            locationCollectionByCountryId = this.angularFirestore
                .collection<LocationModel>(LOCATION_FEATURE_KEY, (reference) =>
                    reference.where('country.uid', '==', countryId)
                )
                .valueChanges();

            this.locationCollectionsByCountryId.set(countryId, locationCollectionByCountryId);
        }

        return locationCollectionByCountryId;
    }

    public load$(uid: string): Observable<LocationModel> {
        return new Observable<LocationModel>((observer) => {
            const locationDocument = this.angularFirestore.doc<LocationModel>(LOCATION_FEATURE_KEY + '/' + uid);

            locationDocument.valueChanges().pipe(
                map((location) => {
                    if (location) {
                        return { ...location, uid: uid };
                    } else {
                        throw new Error('Location loading error: ' + uid);
                    }
                })
            );
        });
    }

    public update$(location: LocationModel): Observable<LocationModel> {
        const locationDocument = this.angularFirestore.doc<LocationModel>(LOCATION_FEATURE_KEY + '/' + location.uid);

        locationDocument.set(location, { merge: true });

        return new Observable<LocationModel>((observer) => {
            observer.next(location);
        });
    }
}
