import { TestBed } from '@angular/core/testing';

import { ZsportAdminHomePageContentService } from './zsport-admin-home-page-content.service';

describe('ZsportAdminHomePageContentService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [ZsportAdminHomePageContentService],
        })
    );

    it('should be created', () => {
        const service: ZsportAdminHomePageContentService = TestBed.inject(ZsportAdminHomePageContentService);

        expect(service).toBeTruthy();
    });
});
