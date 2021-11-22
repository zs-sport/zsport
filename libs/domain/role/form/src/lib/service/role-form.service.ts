import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { RoleEntity } from '@zsport/api';

import { RoleFormBase } from '../base';
import { RoleFormButtonFactory, RoleFormConfigFactory, RoleFormControlFactory, RoleFormFactory } from '../factory';

@Injectable()
export class RoleFormService extends RoleFormBase {
    constructor(
        private roleFormButttonFactory: RoleFormButtonFactory,
        private roleFormConfigFactory: RoleFormConfigFactory,
        private roleFormControlFactory: RoleFormControlFactory,
        private roleFromFactory: RoleFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.roleFromFactory.createDynamicComponent());

        return this.roleFromFactory.getEntity$().pipe(
            switchMap((entity) => this.roleFormControlFactory.createFormControls$(entity as RoleEntity)),
            tap((controls) => {
                this.dynamicInputs$$ = new ReplaySubject();

                this.dynamicInputs$$.next({
                    buttons: this.roleFormButttonFactory.createFormButtons(),
                    config: this.roleFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
