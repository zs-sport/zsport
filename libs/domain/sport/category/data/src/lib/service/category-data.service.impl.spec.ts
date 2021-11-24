import { TestBed } from '@angular/core/testing';

import { CategoryDataServiceImpl } from './category-data.service.impl';

describe('CategoryDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [CategoryDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: CategoryDataServiceImpl = TestBed.inject(CategoryDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
