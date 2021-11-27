import { TestBed } from '@angular/core/testing';

import { PersonUtilServiceImpl } from './person-util.service.impl';

describe('PersonUtilServiceImpl', () => {
    let service: PersonUtilServiceImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(PersonUtilServiceImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
