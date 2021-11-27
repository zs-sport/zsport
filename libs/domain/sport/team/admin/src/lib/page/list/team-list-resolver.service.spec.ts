import { TestBed } from '@angular/core/testing';
import { TeamStateService } from '@zsport/api';

import { TeamListResolverService } from './team-list-resolver.service';

describe('TeamListResolverService', () => {
    let service: TeamListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TeamListResolverService,
                {
                    provide: TeamStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(TeamListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
