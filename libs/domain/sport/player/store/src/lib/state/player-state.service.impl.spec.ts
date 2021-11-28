import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { PlayerStateServiceImpl } from './player-state.service.impl';

describe('PlayerStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [PlayerStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: PlayerStateServiceImpl = TestBed.inject(PlayerStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
