import { Observable, ReplaySubject, Subject } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Club, EntityBaseComponent, Location, SelectOptionModel, Tournament } from '@zsport/api';

export abstract class TournamentFormBase extends EntityBaseComponent {
    public ageGroupOptions$!: Observable<SelectOptionModel[]>;
    public buttonAction = 'Create';
    public changeTournament!: EventEmitter<Tournament>;
    public clubs$$!: Subject<Club[]>;
    public countryOptions$!: Observable<SelectOptionModel[]>;
    public entityForm$$: Subject<FormGroup> = new ReplaySubject();
    public genderOptions$!: Observable<SelectOptionModel[]>;
    public locations$$!: Subject<Location[]>;
    public tournament$$!: Observable<Tournament>;
}
