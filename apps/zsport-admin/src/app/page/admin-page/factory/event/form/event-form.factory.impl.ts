import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { EventEntity, EventStateService } from '@zsport/api';
import { EventFormFactory } from '@zsport/domain/sport/event/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class EventFormFactoryImpl extends EventFormFactory {
    public constructor(private eventStateService: EventStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<EventEntity> {
        return this.eventStateService.selectSelectedEntity$().pipe(map((entity) => entity as EventEntity));
    }
}
