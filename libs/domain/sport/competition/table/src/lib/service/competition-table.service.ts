import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { CompetitionTableBase } from '../base';
import { CompetitionTableFactory } from '../factory/competition-table.factory';

@Injectable()
export class CompetitionTableService extends CompetitionTableBase {
    public constructor(private competitionTableFactory: CompetitionTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.competitionTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([
            this.competitionTableFactory.getData$(),
            this.competitionTableFactory.createTableConfig$(),
        ]).pipe(
            tap(([data, config]) => {
                this.dynamicInputs$$.next({
                    data,
                    config,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
