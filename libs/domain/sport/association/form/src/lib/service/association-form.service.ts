import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AssociationEntity } from '@zsport/api';

import { AssociationFormBase } from '../base';
import {
    AssociationFormButtonFactory,
    AssociationFormConfigFactory,
    AssociationFormControlFactory,
    AssociationFormFactory,
} from '../factory';

@Injectable()
export class AssociationFormService extends AssociationFormBase {
    constructor(
        private associationFormButttonFactory: AssociationFormButtonFactory,
        private associationFormConfigFactory: AssociationFormConfigFactory,
        private associationFormControlFactory: AssociationFormControlFactory,
        private associationFormFactory: AssociationFormFactory
    ) {
        super();
    }

    public init$(dynamicInputs$$: Subject<any>): Observable<boolean> {
        this.dynamicComponent$ = of(this.associationFormFactory.createDynamicComponent());
        this.dynamicInputs$$ = dynamicInputs$$;

        return this.associationFormFactory.getEntity$().pipe(
            switchMap((entity) =>
                this.associationFormControlFactory.createFormControls$(entity as AssociationEntity).pipe(
                    map((controls) => ({
                        controls,
                        entity,
                    }))
                )
            ),
            tap(({ controls, entity }) => {
                this.dynamicInputs$$.next({
                    buttons: this.associationFormButttonFactory.createFormButtons(entity),
                    config: this.associationFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
