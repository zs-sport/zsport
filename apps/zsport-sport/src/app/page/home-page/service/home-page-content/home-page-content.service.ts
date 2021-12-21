import { map, Observable, of, switchMap, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Competition, CompetitionStateService } from '@zsport/api';

import { HomePageContentBase } from '../../base/home-page-content';

@Injectable()
export class HomePageContentService extends HomePageContentBase {
    public constructor(private competitionStateService: CompetitionStateService) {
        super();
    }

    public init$(): Observable<boolean> {
        this.competitions$ = this.competitionStateService
            .selectEntities$()
            .pipe(map((entities) => entities as Competition[]));

        return this.competitions$.pipe(switchMap(() => of(true)));
    }
}
