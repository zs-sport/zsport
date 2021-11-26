import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { TeamFormBase } from '../base';
import { TeamFormButtonFactory, TeamFormConfigFactory, TeamFormControlFactory, TeamFormFactory } from '../factory';

@Injectable()
export class TeamFormService extends TeamFormBase {
    constructor(
        private teamFormButttonFactory: TeamFormButtonFactory,
        private teamFormConfigFactory: TeamFormConfigFactory,
        private teamFormControlFactory: TeamFormControlFactory,
        private teamFromFactory: TeamFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.teamFromFactory.createDynamicComponent());

        return this.teamFromFactory.getEntity$().pipe(
            switchMap((entity) => this.teamFormControlFactory.createFormControls$(entity)),
            tap((controls) => {
                this.dynamicInputs$$ = new ReplaySubject();

                this.dynamicInputs$$.next({
                    buttons: this.teamFormButttonFactory.createFormButtons(),
                    config: this.teamFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
