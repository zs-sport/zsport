import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { UserTableBase } from '../base';
import { UserTableFactory } from '../factory/user-table';

@Injectable()
export class UserTableService extends UserTableBase {
    public constructor(private userTableFactory: UserTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.userTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([this.userTableFactory.getData$(), this.userTableFactory.createTableConfig$()]).pipe(
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
