import { TestBed } from '@angular/core/testing';
import { PersonStateService } from '@zsport/api';

import { PersonListResolverService } from './person-list-resolver.service';

describe('PersonListResolverService', () => {
    let service: PersonListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PersonListResolverService,
                {
                    provide: PersonStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(PersonListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
