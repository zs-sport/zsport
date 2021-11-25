import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { ClubTableBase } from '../base';
import { ClubTableFactory } from '../factory';

@Injectable()
export class ClubTableService extends ClubTableBase {
    public constructor(private clubTableFactory: ClubTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.clubTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([this.clubTableFactory.getData$(), this.clubTableFactory.createTableConfig$()]).pipe(
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
