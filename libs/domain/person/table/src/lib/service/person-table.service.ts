import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { PersonTableBase } from '../base';
import { PersonTableFactory } from '../factory/person-table.factory';

@Injectable()
export class PersonTableService extends PersonTableBase {
    public constructor(private personTableFactory: PersonTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.personTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([this.personTableFactory.getData$(), this.personTableFactory.createTableConfig$()]).pipe(
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
