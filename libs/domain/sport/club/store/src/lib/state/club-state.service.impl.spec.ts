import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ClubStateServiceImpl } from './club-state.service.impl';

describe('ClubStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [ClubStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: ClubStateServiceImpl = TestBed.inject(ClubStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
