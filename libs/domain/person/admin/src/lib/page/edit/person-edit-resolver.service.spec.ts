import { TestBed } from '@angular/core/testing';

import { PersonEditResolverService } from './person-edit-resolver.service';

describe('PersonEditResolverService', () => {
    let service: PersonEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PersonEditResolverService],
        });

        service = TestBed.inject(PersonEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
