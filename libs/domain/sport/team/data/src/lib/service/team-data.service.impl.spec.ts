import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

import { TeamDataServiceImpl } from './team-data.service.impl';

export const COMMON_CONFIG = {
    apiKey: 'AIzaSyAwRrxjjft7KMdhwfLKPkd8PCBR3JFaLfo',
    authDomain: 'angularfirestore.firebaseapp.com',
    databaseURL: 'https://angularfirestore.firebaseio.com',
    projectId: 'angularfirestore',
    storageBucket: 'angularfirestore.appspot.com',
    messagingSenderId: '1039984584356',
};

describe('TeamDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [AngularFireModule.initializeApp(COMMON_CONFIG)],
            providers: [AngularFirestore, TeamDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: TeamDataServiceImpl = TestBed.inject(TeamDataServiceImpl);
        expect(service).toBeTruthy();
    });
});
