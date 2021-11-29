import { Observable, Subject } from 'rxjs';

import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AgeGroup, Championship, Club, EntityBaseComponent, Gender } from '@zsport/api';

export abstract class ChampionshipFormBase extends EntityBaseComponent {
    public ageGroups$!: Observable<AgeGroup[]>;
    public buttonAction = 'Create';
    public championship$!: Observable<Championship>;
    public changeChampionship!: EventEmitter<Championship>;
    public clubs$$!: Subject<Club[]>;
    public entityForm!: FormGroup;
    public genders$!: Observable<Gender[]>;
}
