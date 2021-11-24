import { TestBed } from '@angular/core/testing';

import { CategoryTableService } from './category-table.service';

describe('CategoryTableService', () => {
    let service: CategoryTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(CategoryTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
