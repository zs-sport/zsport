import { TestBed } from '@angular/core/testing';
import { AuthenticationStateService } from '@zsport/api';
import { HeaderMenuItemFactory, UserProfileItemFactory } from '@zsport/shared';

import { ZsportAdminApplicationHeaderService } from './zsport-admin-application-header.service';

describe('ZsportAdminApplicationHeaderService', () => {
    let service: ZsportAdminApplicationHeaderService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ZsportAdminApplicationHeaderService,
                {
                    provide: AuthenticationStateService,
                    useValue: {},
                },
                {
                    provide: HeaderMenuItemFactory,
                    useValue: {},
                },
                {
                    provide: UserProfileItemFactory,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(ZsportAdminApplicationHeaderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
