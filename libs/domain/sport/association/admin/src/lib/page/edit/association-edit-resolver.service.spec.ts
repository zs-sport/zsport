import { TestBed } from '@angular/core/testing';

import { AssociationEditResolverService } from './association-edit-resolver.service';

describe('AssociationEditResolverService', () => {
    let service: AssociationEditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AssociationEditResolverService],
        });

        service = TestBed.inject(AssociationEditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
