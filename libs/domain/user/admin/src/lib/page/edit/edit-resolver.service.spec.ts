import { TestBed } from '@angular/core/testing';

import { EditResolverService } from './edit-resolver.service';

describe('EditResolverService', () => {
    let service: EditResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EditResolverService],
        });

        service = TestBed.inject(EditResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
