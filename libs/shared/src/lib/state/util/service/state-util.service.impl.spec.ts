import { TestBed } from '@angular/core/testing';

import { StateUtilServiceImpl } from './state-util.service.impl';

describe('StateUtilServiceImpl', () => {
    let service: StateUtilServiceImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(StateUtilServiceImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
