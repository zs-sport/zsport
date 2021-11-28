import { TestBed } from '@angular/core/testing';

import { PlayerDataServiceImpl } from './player-data.service.impl';

describe('PlayerDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [PlayerDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: PlayerDataServiceImpl = TestBed.inject(PlayerDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
