import { combineLatest, Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { PlayerTableBase } from '../base';
import { PlayerTableFactory } from '../factory';

@Injectable()
export class PlayerTableService extends PlayerTableBase {
    public constructor(private playerTableFactory: PlayerTableFactory) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.playerTableFactory.getTableComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return combineLatest([this.playerTableFactory.getData$(), this.playerTableFactory.createTableConfig$()]).pipe(
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
