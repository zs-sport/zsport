import { TestBed } from '@angular/core/testing';

import { CategoryEditResolverService } from './category-edit-resolver.service';

describe('CategoryEditResolverService', () => {
    let service: CategoryEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CategoryEditResolverService],
        });

        service = TestBed.inject(CategoryEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
