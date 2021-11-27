import { TestBed } from '@angular/core/testing';

import { TeamEditResolverService } from './team-edit-resolver.service';

describe('TeamEditResolverService', () => {
    let service: TeamEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TeamEditResolverService],
        });

        service = TestBed.inject(TeamEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
