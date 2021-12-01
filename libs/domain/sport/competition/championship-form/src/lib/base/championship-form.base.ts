import { Observable, ReplaySubject, Subject } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AgeGroup, Championship, Club, EntityBaseComponent, Gender, SelectOptionModel } from '@zsport/api';

export abstract class ChampionshipFormBase extends EntityBaseComponent {
    public ageGroupOptions$!: Observable<SelectOptionModel[]>;
    public buttonAction = 'Create';
    public championship$!: Observable<Championship>;
    public changeChampionship!: EventEmitter<Championship>;
    public clubs$$!: Subject<Club[]>;
    public entityForm$$: Subject<FormGroup> = new ReplaySubject();
    public genderOptions$!: Observable<SelectOptionModel[]>;
}
