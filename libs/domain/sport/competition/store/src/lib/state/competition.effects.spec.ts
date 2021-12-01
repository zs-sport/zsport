import { Observable } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DomainSportCompetitionDataModule } from '@zsport/domain/sport/competition/data';

import { CompetitionEffects } from './competition.effects';

describe('CompetitionEffects', () => {
    let actions$: Observable<any>;
    let effects: CompetitionEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, DomainSportCompetitionDataModule, StoreModule.forRoot({})],
            providers: [CompetitionEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(CompetitionEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
