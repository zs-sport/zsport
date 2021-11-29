import { Observable, Subject } from 'rxjs';

import { TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Association, Category, Championship, ClubEntity, Competition, EntityBaseComponent } from '@zsport/api';

export abstract class CompetitionFormBase extends EntityBaseComponent {
    protected typeRefs!: Map<string, TemplateRef<any>>;

    public readonly TYPES = ['championship', 'cup', 'tournament'];

    public associations$$!: Subject<Association[]>;
    public buttonAction!: string;
    public categories$!: Observable<Category[]>;
    public clubs$$!: Subject<ClubEntity[]>;
    public competition$!: Observable<Competition | null>;
    public competitionForm!: FormGroup;
    public currentStep$$!: Subject<number>;
    public instance$!: Subject<Competition>;
    public languages$!: Observable<string[]>;
    public template!: Subject<TemplateRef<any>>;
    public types$!: Observable<string[]>;

    public abstract categorySelectChangeHandler(category: Category): void;
    public abstract changeChampionshipHandler(championship: Championship): void;
    public abstract compareEntities(o1: any, o2: any): boolean;
    public abstract compareTypes(o1: any, o2: any): boolean;
    public abstract doneSteps(): void;
    public abstract nextStep(): void;
    public abstract onSubmit(): void;
    public abstract previousStep(): void;
}
