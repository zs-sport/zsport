import { TestBed } from '@angular/core/testing';

import { PlayerEditResolverService } from './player-edit-resolver.service';

describe('PlayerEditResolverService', () => {
    let service: PlayerEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlayerEditResolverService],
        });

        service = TestBed.inject(PlayerEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
