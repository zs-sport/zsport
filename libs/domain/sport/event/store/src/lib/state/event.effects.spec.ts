import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';

import { EventEffects } from './event.effects';

describe('EventEffects', () => {
    let actions$: Observable<any>;
    let effects: EventEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [EventEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(EventEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
