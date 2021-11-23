import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { AssociationStateServiceImpl } from './association-state.service.impl';

describe('AssociationStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [AssociationStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: AssociationStateServiceImpl = TestBed.inject(AssociationStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
