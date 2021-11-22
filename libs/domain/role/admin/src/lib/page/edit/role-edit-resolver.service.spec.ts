import { TestBed } from '@angular/core/testing';

import { RoleEditResolverService } from './role-edit-resolver.service';

describe('RoleEditResolverService', () => {
    let service: RoleEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RoleEditResolverService],
        });

        service = TestBed.inject(RoleEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
