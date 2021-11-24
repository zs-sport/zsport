import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { CategoryEffects } from './category.effects';

describe('SportCategoryEffects', () => {
    let actions$: Observable<any>;
    let effects: CategoryEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [AngularFirestore, CategoryEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(CategoryEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
