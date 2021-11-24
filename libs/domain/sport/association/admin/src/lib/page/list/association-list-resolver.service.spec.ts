import { TestBed } from '@angular/core/testing';
import { AssociationStateService } from '@zsport/api';

import { AssociationListResolverService } from './association-list-resolver.service';

describe('AssociationListResolverService', () => {
    let service: AssociationListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AssociationListResolverService,
                {
                    provide: AssociationStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(AssociationListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
