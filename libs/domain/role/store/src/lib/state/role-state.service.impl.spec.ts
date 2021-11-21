import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { RoleStateServiceImpl } from './role-state.service.impl';

describe('RoleStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [RoleStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: RoleStateServiceImpl = TestBed.inject(RoleStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
