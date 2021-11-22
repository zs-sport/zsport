import { TestBed } from '@angular/core/testing';
import { RoleStateService } from '@zsport/api';

import { RoleListResolverService } from './role-list-resolver.service';

describe('RoleListResolverService', () => {
    let service: RoleListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RoleListResolverService,
                {
                    provide: RoleStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(RoleListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
