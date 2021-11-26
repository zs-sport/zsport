import { TestBed } from '@angular/core/testing';

import { LocationEditResolverService } from './location-edit-resolver.service';

describe('LocationEditResolverService', () => {
    let service: LocationEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocationEditResolverService],
        });

        service = TestBed.inject(LocationEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
