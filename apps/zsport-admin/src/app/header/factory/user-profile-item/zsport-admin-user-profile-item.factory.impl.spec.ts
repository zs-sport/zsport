import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationStateService, AuthorizationService } from '@zsport/api';

import { ZsportAdminUserProfileItemFactoryImpl } from './zsport-admin-user-profile-item.factory.impl';

describe('ZsportAdminUserProfileItemFactoryImpl', () => {
    let service: ZsportAdminUserProfileItemFactoryImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            providers: [
                ZsportAdminUserProfileItemFactoryImpl,
                {
                    provide: AuthenticationStateService,
                    useValue: {},
                },
                {
                    provide: AuthorizationService,
                    useValue: {},
                },
            ],
        });

        service = TestBed.inject(ZsportAdminUserProfileItemFactoryImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
