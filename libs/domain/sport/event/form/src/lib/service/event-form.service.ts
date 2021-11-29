import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { EventEntity } from '@zsport/api';

import { EventFormBase } from '../base';
import { EventFormButtonFactory, EventFormConfigFactory, EventFormControlFactory, EventFormFactory } from '../factory';

@Injectable()
export class EventFormService extends EventFormBase {
    constructor(
        private eventFormButtonFactory: EventFormButtonFactory,
        private eventFormConfigFactory: EventFormConfigFactory,
        private eventFormControlFactory: EventFormControlFactory,
        private eventFromFactory: EventFormFactory
    ) {
        super();
    }

    public init$(): Observable<boolean> {
        this.dynamicComponent$ = of(this.eventFromFactory.createDynamicComponent());
        this.dynamicInputs$$ = new ReplaySubject();

        return this.eventFromFactory.getEntity$().pipe(
            switchMap((entity) => this.eventFormControlFactory.createFormControls$(entity as EventEntity)),
            tap((controls) => {
                this.dynamicInputs$$.next({
                    buttons: this.eventFormButtonFactory.createFormButtons(),
                    config: this.eventFormConfigFactory.createFormConfig(),
                    controls,
                });
            }),
            switchMap(() => of(true))
        );
    }
}
