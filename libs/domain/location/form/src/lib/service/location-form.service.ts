import { Observable, of, ReplaySubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { LocationFormBase } from '../base';
import {
    LocationFormButtonFactory,
    LocationFormConfigFactory,
    LocationFormControlFactory,
    LocationFormFactory,
} from '../factory';

@Injectable()
export class LocationFormService extends LocationFormBase {
    constructor(
        private locationFormButttonFactory: LocationFormButtonFactory,
        private locationFormConfigFactory: LocationFormConfigFactory,
        private locationFormControlFactory: LocationFormControlFactory,
        private locationFromFactory: LocationFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.locationFromFactory.createDynamicComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return this.locationFromFactory.getEntity$().pipe(
            switchMap((entity) =>
                this.locationFormControlFactory.createFormControls$(entity).pipe(
                    map((controls) => ({
                        controls,
                        entity,
                    }))
                )
            ),
            tap(({ controls, entity }) => {
                this.dynamicInputs$$.next({
                    buttons: this.locationFormButttonFactory.createFormButtons(entity),
                    config: this.locationFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
