import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { AgeGroup, Category, ControlBase, DynamicFormControlFactory, Gender, Event, Team } from '@zsport/api';

@Injectable()
export abstract class EventCompetitionFormControlFactory extends DynamicFormControlFactory {
    public createFormControls$(dataModel: any): Observable<ControlBase<any>[]> {
        return of();
    }

    public abstract createFormControlsForEvent$(
        dataModel: Event,
        sportCategories: Category[],
        genders: Gender[],
        ageGroups: AgeGroup[],
        sportTeams: Team[]
    ): Observable<ControlBase<any>[]>;
}
