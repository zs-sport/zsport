import { TestBed } from '@angular/core/testing';
import { UserStateService } from '@zsport/api';

import { ListResolverService } from './list-resolver.service';

describe('ListResolverService', () => {
    let service: ListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ListResolverService,
                {
                    provide: UserStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(ListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
