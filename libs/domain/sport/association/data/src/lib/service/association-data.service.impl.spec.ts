import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { AssociationDataServiceImpl } from './association-data.service.impl';

describe('SportAssociationDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [AngularFirestore, AssociationDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: AssociationDataServiceImpl = TestBed.inject(AssociationDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
