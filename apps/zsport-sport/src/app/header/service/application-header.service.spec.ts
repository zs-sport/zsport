import { TestBed } from '@angular/core/testing';
import { HeaderMenuItemFactory, UserProfileItemFactory } from '@zsport/shared';

import { ApplicationHeaderService } from './application-header.service';

describe('ApplicationHeaderService', () => {
    let service: ApplicationHeaderService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ApplicationHeaderService,
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
        service = TestBed.inject(ApplicationHeaderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
