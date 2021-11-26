import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { TeamStateServiceImpl } from './team-state.service.impl';

describe('TeamStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [TeamStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: TeamStateServiceImpl = TestBed.inject(TeamStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
