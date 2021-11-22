import { TestBed } from '@angular/core/testing';

import { ZsportAdminAdminResolverService } from './zsport-admin-admin-resolver.service';

describe('ZsportAdminAdminResolverService', () => {
    let service: ZsportAdminAdminResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ZsportAdminAdminResolverService],
        });

        service = TestBed.inject(ZsportAdminAdminResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
