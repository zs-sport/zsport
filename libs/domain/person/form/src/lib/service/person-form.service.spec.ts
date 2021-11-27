import { TestBed } from '@angular/core/testing';

import { PersonFormService } from './person-form.service';

describe('PersonFormService', () => {
    let service: PersonFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PersonFormService],
        });

        service = TestBed.inject(PersonFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
