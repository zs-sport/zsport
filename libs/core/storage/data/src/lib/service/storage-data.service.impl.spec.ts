import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { StorageDataServiceImpl } from './storage-data.service.impl';

describe('StorageDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [AngularFirestore, StorageDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: StorageDataServiceImpl = TestBed.inject(StorageDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
