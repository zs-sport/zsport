import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { RoleDataServiceImpl } from './role-data.service.impl';

describe('RoleDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [AngularFirestore, RoleDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: RoleDataServiceImpl = TestBed.inject(RoleDataServiceImpl);
        expect(service).toBeTruthy();
    });
});
