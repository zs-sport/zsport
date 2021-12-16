import { TestBed } from '@angular/core/testing';

import { IconServiceImpl } from './icon.service.impl';

describe('IconServiceImpl', () => {
    let service: IconServiceImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [IconServiceImpl]
        });
        service = TestBed.inject(IconServiceImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
