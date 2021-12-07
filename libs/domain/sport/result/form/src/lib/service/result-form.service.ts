import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Result } from '@zsport/api';

import { ResultFormBase } from '../base';
import {
    ResultFormButtonFactory,
    ResultFormConfigFactory,
    ResultFormControlFactory,
    ResultFormFactory,
} from '../factory';

@Injectable()
export class ResultFormService extends ResultFormBase {
    constructor(
        private resultFormButttonFactory: ResultFormButtonFactory,
        private resultFormConfigFactory: ResultFormConfigFactory,
        private resultFormControlFactory: ResultFormControlFactory,
        private resultFromFactory: ResultFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.resultFromFactory.createDynamicComponent());

        return this.resultFromFactory.getEntity$().pipe(
            switchMap((entity) => this.resultFormControlFactory.createFormControls$(entity as Result)),
            tap((controls) => {
                this.dynamicInputs$$ = new ReplaySubject();

                this.dynamicInputs$$.next({
                    buttons: this.resultFormButttonFactory.createFormButtons(),
                    config: this.resultFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
