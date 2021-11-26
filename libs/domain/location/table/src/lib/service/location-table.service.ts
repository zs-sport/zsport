import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { LocationTableBase } from '../base';
import { LocationTableFactory } from '../factory/location-table.factory';

@Injectable()
export class LocationTableService extends LocationTableBase {
    public constructor(private locationTableFactory: LocationTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.locationTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([
            this.locationTableFactory.getData$(),
            this.locationTableFactory.createTableConfig$(),
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
