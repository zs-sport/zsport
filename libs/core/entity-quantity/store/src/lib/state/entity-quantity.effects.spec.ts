import { Observable } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { EntityQuantityEffects } from './entity-quantity.effects';

describe('EntityQuantityEffects', () => {
    let actions$: Observable<any>;
    let effects: EntityQuantityEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, StoreModule.forRoot({})],
            providers: [AngularFirestore, EntityQuantityEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(EntityQuantityEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
