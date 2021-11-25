import { TestBed } from '@angular/core/testing';
import { ClubStateService } from '@zsport/api';

import { ClubListResolverService } from './club-list-resolver.service';

describe('ClubListResolverService', () => {
    let service: ClubListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ClubListResolverService,
                {
                    provide: ClubStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(ClubListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
