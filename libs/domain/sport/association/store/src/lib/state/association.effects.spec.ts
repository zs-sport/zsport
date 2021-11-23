import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { AssociationEffects } from './association.effects';

describe('SportAssociationEffects', () => {
    let actions$: Observable<any>;
    let effects: AssociationEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [AngularFirestore, AssociationEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(AssociationEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
