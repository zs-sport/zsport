import { TestBed } from '@angular/core/testing';

import { ClubEditResolverService } from './club-edit-resolver.service';

describe('ClubEditResolverService', () => {
    let service: ClubEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ClubEditResolverService],
        });

        service = TestBed.inject(ClubEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
