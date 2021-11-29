import { TestBed } from '@angular/core/testing';

import { RoundFormService } from './round-form.service';

describe('RoundFormService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: RoundFormService = TestBed.get(RoundFormService);

        expect(service).toBeTruthy();
    });
});
