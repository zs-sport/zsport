import { inject, TestBed } from '@angular/core/testing';

import { HomePageResolverService } from './home-page-resolver.service';

describe('HomePageResolverService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HomePageResolverService],
        });
    });

    it('should be created', inject([HomePageResolverService], (service: HomePageResolverService) => {
        expect(service).toBeTruthy();
    }));
});
