import { Observable, Subject } from 'rxjs';

import { AgeGroup, BaseService, Category, Event, EventList, Gender, Team, Tournament } from '@zsport/api';
import { KeyValue } from '@angular/common';

export abstract class TournamentFinalBase extends BaseService {
    public ageGroups$$!: Subject<AgeGroup[]>;
    public categories$$!: Subject<Category[]>;
    public dynamicEventFormComponent$$!: Subject<any>;
    public dynamicEventFormInputs$$!: Subject<any>;
    public dynamicEventFormOutputs$$!: Subject<any>;
    public event$$!: Subject<Partial<Event>>;
    public eventList$$!: Subject<EventList[] | undefined>;
    public eventNumber!: number;
    public events$$!: Subject<Map<string, (Event | undefined)[]> | undefined>[];
    public genders$$!: Subject<Gender[]>;
    public selectedFinalTabId$!: Observable<number>;
    public teams$$!: Subject<Team[]>;
    public tournament$$!: Observable<Tournament>;

    public abstract addEventHandler(indexTitle: KeyValue<number, string>): void;
    public abstract editEventHandler(event: Event): void;
    public abstract eventUpdateHandler(event: Event): void;
}
