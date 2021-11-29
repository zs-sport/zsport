import { TestBed } from '@angular/core/testing';

import { CompetitionEditResolverService } from './competition-edit-resolver.service';

describe('CompetitionEditResolverService', () => {
    let service: CompetitionEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CompetitionEditResolverService],
        });

        service = TestBed.inject(CompetitionEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
