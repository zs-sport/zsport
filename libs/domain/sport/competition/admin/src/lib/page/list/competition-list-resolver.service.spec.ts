import { TestBed } from '@angular/core/testing';
import { CompetitionStateService } from '@zsport/api';

import { CompetitionListResolverService } from './competition-list-resolver.service';

describe('CompetitionListResolverService', () => {
    let service: CompetitionListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CompetitionListResolverService,
                {
                    provide: CompetitionStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(CompetitionListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
