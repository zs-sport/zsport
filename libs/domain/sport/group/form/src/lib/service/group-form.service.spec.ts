import { TestBed } from '@angular/core/testing';

import { GroupFormService } from './group-form.service';

describe('GroupFormService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: GroupFormService = TestBed.get(GroupFormService);

        expect(service).toBeTruthy();
    });
});
