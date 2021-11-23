import { TestBed } from '@angular/core/testing';

import { AssociationFormService } from './association-form.service';

describe('AssociationFormService', () => {
    let service: AssociationFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AssociationFormService],
        });

        service = TestBed.inject(AssociationFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
