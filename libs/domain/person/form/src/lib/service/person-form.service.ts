import { Observable, of, ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { PersonFormBase } from '../base';
import {
    PersonFormButtonFactory,
    PersonFormConfigFactory,
    PersonFormControlFactory,
    PersonFormFactory,
} from '../factory';

@Injectable()
export class PersonFormService extends PersonFormBase {
    constructor(
        private personFormButttonFactory: PersonFormButtonFactory,
        private personFormConfigFactory: PersonFormConfigFactory,
        private personFormControlFactory: PersonFormControlFactory,
        private personFromFactory: PersonFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.personFromFactory.createDynamicComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return this.personFromFactory.getEntity$().pipe(
            switchMap((entity) =>
                this.personFormControlFactory.createFormControls$(entity).pipe(
                    map((controls) => ({
                        controls,
                        entity,
                    }))
                )
            ),
            tap(({ controls, entity }) => {
                this.dynamicInputs$$.next({
                    buttons: this.personFormButttonFactory.createFormButtons(entity),
                    config: this.personFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
