import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { PersonDataService } from '@zsport/api';

import { PersonEffects } from './person.effects';

describe('PersonEffects', () => {
    let actions$: Observable<any>;
    let effects: PersonEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [
                PersonEffects,
                provideMockActions(() => actions$),
                {
                    provide: PersonDataService,
                    useValue: {},
                },
            ],
        });

        effects = TestBed.inject(PersonEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
