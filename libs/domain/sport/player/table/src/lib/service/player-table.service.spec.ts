import { TestBed } from '@angular/core/testing';

import { PlayerTableService } from './player-table.service';

describe('PlayerTableService', () => {
    let service: PlayerTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(PlayerTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
