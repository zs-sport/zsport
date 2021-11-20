import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { EntityQuantityStateServiceImpl } from './entity-quantity-state.service.impl';

describe('EntityQuantityStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [EntityQuantityStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: EntityQuantityStateServiceImpl = TestBed.inject(EntityQuantityStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
