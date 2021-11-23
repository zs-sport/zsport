import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { AssociationTableBase } from '../base';
import { AssociationTableFactory } from '../factory/association-table.factory';

@Injectable()
export class AssociationTableService extends AssociationTableBase {
    public constructor(private associationTableFactory: AssociationTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.associationTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([
            this.associationTableFactory.getData$(),
            this.associationTableFactory.createTableConfig$(),
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
