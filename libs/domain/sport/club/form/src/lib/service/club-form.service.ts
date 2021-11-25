import { Observable, of, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { ClubFormBase } from '../base';
import { ClubFormButtonFactory, ClubFormConfigFactory, ClubFormControlFactory, ClubFormFactory } from '../factory';

@Injectable()
export class ClubFormService extends ClubFormBase {
    constructor(
        private sportClubFormButttonFactory: ClubFormButtonFactory,
        private sportClubFormConfigFactory: ClubFormConfigFactory,
        private sportClubFormControlFactory: ClubFormControlFactory,
        private sportClubFromFactory: ClubFormFactory
    ) {
        super();
    }

    public init$(dynamicInputs$$: Subject<any>): Observable<boolean> {
        this.dynamicComponent$ = of(this.sportClubFromFactory.createDynamicComponent());
        this.dynamicInputs$$ = dynamicInputs$$;

        return this.sportClubFromFactory.getEntity$().pipe(
            switchMap((entity) => this.sportClubFormControlFactory.createFormControls$(entity)),
            tap((controls) => {
                this.dynamicInputs$$.next({
                    buttons: this.sportClubFormButttonFactory.createFormButtons(),
                    config: this.sportClubFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
