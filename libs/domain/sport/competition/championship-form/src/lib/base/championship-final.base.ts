import { Observable, Subject } from 'rxjs';

import { AgeGroup, BaseService, Category, Championship, Event, EventList, Gender, Team } from '@zsport/api';

export abstract class ChampionshipFinalBase extends BaseService {
    public ageGroups$$!: Subject<AgeGroup[]>;
    public categories$$!: Subject<Category[]>;
    public championship$!: Observable<Championship>;
    public dynamicEventFormComponent$$!: Subject<any>;
    public dynamicEventFormInputs$$!: Subject<any>;
    public dynamicEventFormOutputs$$!: Subject<any>;
    public genders$$!: Subject<Gender[]>;
    public event$$!: Subject<Partial<Event>>;
    public eventList$$!: Subject<EventList[] | undefined>;
    public eventNumber!: number;
    public events$$!: Subject<Event[]>[];
    public selectedFinalTabId$!: Observable<number>;
    public teams$$!: Subject<Team[]>;

    public abstract addEventHandler(index: number): void;
    public abstract editEventHandler(event: Event): void;
    public abstract eventUpdateHandler(event: Event): void;
}
