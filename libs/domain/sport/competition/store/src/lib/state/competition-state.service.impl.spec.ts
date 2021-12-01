import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CompetitionStateServiceImpl } from './competition-state.service.impl';

describe('CompetitionStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [CompetitionStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: CompetitionStateServiceImpl = TestBed.inject(CompetitionStateServiceImpl);

        expect(service).toBeTruthy();
    });
});
