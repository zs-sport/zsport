import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { TeamTableBase } from '../base';
import { TeamTableFactory } from '../factory/team-table.factory';

@Injectable()
export class TeamTableService extends TeamTableBase {
    public constructor(private teamTableFactory: TeamTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.teamTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([this.teamTableFactory.getData$(), this.teamTableFactory.createTableConfig$()]).pipe(
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
