import { Observable, of, ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { CategoryEntity } from '@zsport/api';

import { CategoryFormBase } from '../base';
import {
    CategoryFormButtonFactory,
    CategoryFormConfigFactory,
    CategoryFormControlFactory,
    CategoryFormFactory,
} from '../factory';

@Injectable()
export class CategoryFormService extends CategoryFormBase {
    constructor(
        private categoryFormButttonFactory: CategoryFormButtonFactory,
        private categoryFormConfigFactory: CategoryFormConfigFactory,
        private categoryFormControlFactory: CategoryFormControlFactory,
        private categoryFormFactory: CategoryFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.categoryFormFactory.createDynamicComponent());

        return this.categoryFormFactory.getEntity$('').pipe(
            switchMap((entity) =>
                this.categoryFormControlFactory.createFormControls$(entity).pipe(
                    map((controls) => ({
                        controls,
                        entity,
                    }))
                )
            ),
            tap(({ controls, entity }) => {
                this.dynamicInputs$$ = new ReplaySubject();

                this.dynamicInputs$$.next({
                    buttons: this.categoryFormButttonFactory.createFormButtons(entity as CategoryEntity),
                    config: this.categoryFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
