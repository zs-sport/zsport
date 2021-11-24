import { TestBed } from '@angular/core/testing';
import { CategoryStateService } from '@zsport/api';

import { CategoryListResolverService } from './category-list-resolver.service';

describe('CategoryListResolverService', () => {
    let service: CategoryListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CategoryListResolverService,
                {
                    provide: CategoryStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(CategoryListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
