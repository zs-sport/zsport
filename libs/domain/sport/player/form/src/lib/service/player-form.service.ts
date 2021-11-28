import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { PlayerFormBase } from '../base';
import {
    PlayerFormButtonFactory,
    PlayerFormConfigFactory,
    PlayerFormControlFactory,
    PlayerFormFactory,
} from '../factory';

@Injectable()
export class PlayerFormService extends PlayerFormBase {
    constructor(
        private playerFormButttonFactory: PlayerFormButtonFactory,
        private playerFormConfigFactory: PlayerFormConfigFactory,
        private playerFormControlFactory: PlayerFormControlFactory,
        private playerFromFactory: PlayerFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.playerFromFactory.createDynamicComponent());

        return this.playerFromFactory.getEntity$().pipe(
            switchMap((entity) => this.playerFormControlFactory.createFormControls$(entity)),
            tap((controls) => {
                this.dynamicInputs$$ = new ReplaySubject();

                this.dynamicInputs$$.next({
                    buttons: this.playerFormButttonFactory.createFormButtons(),
                    config: this.playerFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
