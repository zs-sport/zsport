import { TestBed } from '@angular/core/testing';

import { ResultEditResolverService } from './result-edit-resolver.service';

describe('ResultEditResolverService', () => {
    let service: ResultEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ResultEditResolverService],
        });

        service = TestBed.inject(ResultEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
