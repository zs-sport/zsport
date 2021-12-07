import { TestBed } from '@angular/core/testing';
import { ResultStateService } from '@zsport/api';

import { ResultListResolverService } from './result-list-resolver.service';

describe('ResultListResolverService', () => {
    let service: ResultListResolverService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ResultListResolverService,
                {
                    provide: ResultStateService,
                    useValue: {},
                },
            ],
        });
        service = TestBed.inject(ResultListResolverService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
