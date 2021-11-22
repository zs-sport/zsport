import { TestBed } from '@angular/core/testing';

import { RoleDataServiceImpl } from './role-data.service.impl';

describe('RoleDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [RoleDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: RoleDataServiceImpl = TestBed.inject(RoleDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
