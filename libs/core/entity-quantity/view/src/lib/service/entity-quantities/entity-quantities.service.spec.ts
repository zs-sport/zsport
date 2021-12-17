import { TestBed } from '@angular/core/testing';

import { EntityQuantitiesService } from './entity-quantities.service';

describe('EntityQuantitiesService', () => {
    let service: EntityQuantitiesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EntityQuantitiesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
