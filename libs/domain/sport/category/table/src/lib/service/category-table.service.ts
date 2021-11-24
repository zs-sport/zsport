import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { CategoryTableBase } from '../base';
import { CategoryTableFactory } from '../factory/category-table.factory';

@Injectable()
export class CategoryTableService extends CategoryTableBase {
    public constructor(private categoryTableFactory: CategoryTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.categoryTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([
            this.categoryTableFactory.getData$(),
            this.categoryTableFactory.createTableConfig$(),
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
