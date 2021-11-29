import { Observable, Subject } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { AgeGroup, Category, EntityBaseComponent, Event, Gender, Team } from '@zsport/api';

export abstract class EventCompetitionFormBase extends EntityBaseComponent {
    public ageGroups$!: Observable<AgeGroup[]>;
    public categories$!: Observable<Category[]>;
    public dynamicComponent$$!: Subject<any>;
    public event$!: Observable<Event>;
    public eventUpdate!: EventEmitter<Event>;
    public formValueChange!: EventEmitter<Event>;
    public genders$!: Observable<Gender[]>;
    public teams$!: Observable<Team[]>;
}
