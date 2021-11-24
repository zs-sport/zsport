import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CategoryStateServiceImpl } from './category-state.service.impl';

describe('CategoryStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [CategoryStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: CategoryStateServiceImpl = TestBed.inject(CategoryStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
