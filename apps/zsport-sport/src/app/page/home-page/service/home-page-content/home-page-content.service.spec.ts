import { TestBed } from '@angular/core/testing';

import { HomePageContentService } from './home-page-content.service';

describe('HomePageContentService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [
                HomePageContentService,
            ],
        })
    );

    it('should be created', () => {
        const service: HomePageContentService = TestBed.inject(HomePageContentService);

        expect(service).toBeTruthy();
    });
});
