import { TestBed } from '@angular/core/testing';
import { PlayerStateService } from '@zsport/api';

import { PlayerListResolverService } from './player-list-resolver.service';

describe('PlayerListResolverService', () => {
    let service: PlayerListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PlayerListResolverService,
                {
                    provide: PlayerStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(PlayerListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
