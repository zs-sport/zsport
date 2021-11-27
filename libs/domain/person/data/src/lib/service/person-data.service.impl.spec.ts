import { TestBed } from '@angular/core/testing';

import { PersonDataServiceImpl } from './person-data.service.impl';

describe('PersonDataServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [PersonDataServiceImpl],
        })
    );

    it('should be created', () => {
        const service: PersonDataServiceImpl = TestBed.inject(PersonDataServiceImpl);

        expect(service).toBeTruthy();
    });
});
