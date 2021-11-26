import { TestBed } from '@angular/core/testing';
import { LocationStateService } from '@zsport/api';

import { LocationListResolverService } from './location-list-resolver.service';

describe('LocationListResolverService', () => {
    let service: LocationListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LocationListResolverService,
                {
                    provide: LocationStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(LocationListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
