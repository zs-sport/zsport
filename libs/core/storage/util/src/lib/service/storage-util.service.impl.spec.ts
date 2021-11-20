import { TestBed } from '@angular/core/testing';

import { StorageUtilServiceImpl } from './storage-util.service.impl';

describe('StorageUtilServiceImpl', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: StorageUtilServiceImpl = TestBed.inject(StorageUtilServiceImpl);

        expect(service).toBeTruthy();
    });
});
