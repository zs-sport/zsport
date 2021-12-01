import { map, Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { EventEntity, EventStateService } from '@zsport/api';
import { EventCompetitionFormFactory } from '@zsport/domain/sport/event/competition-form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class CompetitionEventFormFactoryImpl extends EventCompetitionFormFactory {
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
