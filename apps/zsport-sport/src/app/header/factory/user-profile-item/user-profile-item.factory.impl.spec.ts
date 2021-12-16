import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserProfileItemFactoryImpl } from './user-profile-item.factory.impl';

describe('UserProfileItemFactoryImpl', () => {
    let service: UserProfileItemFactoryImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            providers: [UserProfileItemFactoryImpl],
        });

        service = TestBed.inject(UserProfileItemFactoryImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
