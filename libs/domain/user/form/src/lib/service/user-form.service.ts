import { Observable, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserEntity } from '@zsport/api';

import { UserFormBase } from '../base';
import { UserFormButtonFactory, UserFormConfigFactory, UserFormControlFactory, UserFormFactory } from '../factory';

@Injectable()
export class UserFormService extends UserFormBase {
    constructor(
        private activatedRoute: ActivatedRoute,
        private userFormButttonFactory: UserFormButtonFactory,
        private userFormConfigFactory: UserFormConfigFactory,
        private userFormControlFactory: UserFormControlFactory,
        private userFormFactory: UserFormFactory
    ) {
        super();
    }

    public init$(dynamicInputs$$: Subject<any>): Observable<boolean> {
        const userId = this.activatedRoute.snapshot.params.userId;

        this.dynamicComponent$ = of(this.userFormFactory.createDynamicComponent());

        this.dynamicInputs$$ = dynamicInputs$$;

        return this.userFormFactory.getEntity$(userId).pipe(
            switchMap((entity) => this.userFormControlFactory.createFormControls$(entity as UserEntity)),
            tap((controls) => {
                this.dynamicInputs$$.next({
                    buttons: this.userFormButttonFactory.createFormButtons(),
                    config: this.userFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
