import { TestBed } from '@angular/core/testing';

import { ResultFormService } from './result-form.service';

describe('ResultFormService', () => {
    let service: ResultFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ResultFormService],
        });

        service = TestBed.inject(ResultFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
