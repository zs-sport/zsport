import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

import { TemplateRef } from '@angular/core';

import {
    Association,
    Category,
    Championship,
    ClubEntity,
    Competition,
    EntityBaseComponent,
    Tournament,
} from '@zsport/api';

export const COMPETITION_TYPES = ['championship', 'tournament', 'cup'];

export abstract class CompetitionFormBase extends EntityBaseComponent {
    protected typeRefs!: Map<string, TemplateRef<any>>;

    public associations$$!: Subject<Association[]>;
    public buttonAction!: string;
    public categories$!: Observable<Category[]>;
    public clubs$$!: Subject<ClubEntity[]>;
    public competition$!: Observable<Competition | null>;
    public currentStep$$: Subject<number> = new BehaviorSubject(0);
    public instance$!: Subject<Competition>;
    public languages$!: Observable<string[]>;
    public template$$: Subject<TemplateRef<any>> = new ReplaySubject();
    public types$!: Observable<string[]>;

    public abstract categorySelectChangeHandler(category: Category): void;
    public abstract changeChampionshipHandler(championship: Championship): void;
    public abstract changeTournamentHandler(tournament: Tournament): void;
    public abstract compareEntities(o1: any, o2: any): boolean;
    public abstract compareTypes(o1: any, o2: any): boolean;
    public abstract doneSteps(): void;
    public abstract nextStep(): void;
    public abstract onSubmit(): void;
    public abstract previousStep(): void;
}
