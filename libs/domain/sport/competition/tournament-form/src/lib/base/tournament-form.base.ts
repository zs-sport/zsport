import { Observable, ReplaySubject, Subject } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Tournament, Club, EntityBaseComponent, SelectOptionModel, Competition } from '@zsport/api';

export abstract class TournamentFormBase extends EntityBaseComponent {
    public ageGroupOptions$!: Observable<SelectOptionModel[]>;
    public buttonAction = 'Create';
    public tournament$$!: Observable<Tournament>;
    public changeTournament!: EventEmitter<Tournament>;
    public clubs$$!: Subject<Club[]>;
    public entityForm$$: Subject<FormGroup> = new ReplaySubject();
    public genderOptions$!: Observable<SelectOptionModel[]>;
}
