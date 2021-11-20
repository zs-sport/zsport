import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { EntityQuantityDataServiceImpl } from './entity-quantity-data.service.impl';

describe('EntityQuantityDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [AngularFirestore, EntityQuantityDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: EntityQuantityDataServiceImpl = TestBed.inject(EntityQuantityDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
