import * as moment from 'moment';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
    AssociationStateService,
    Category,
    CategoryStateService,
    Championship,
    ClubStateService,
    Competition,
    CompetitionStateService,
    I18nService,
} from '@zsport/api';

import { CompetitionFormBase } from '../base';

@Injectable()
export class CompetitionFormService extends CompetitionFormBase {
    public competitionForm!: FormGroup;
    private current: number = 0;
    private editedCompetition!: Competition;
    private readClubsOrAssociations$$!: Subject<string>;
    private templates!: any[];

    public compareEntities = (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2);

    public compareTypes = (o1: any, o2: any): boolean => {
        return o1 === o2;
    };

    public competition!: Competition;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private competitionStateService: CompetitionStateService,
        private formBuilder: FormBuilder,
        private i18nService: I18nService,
        private router: Router,
        private associationStateService: AssociationStateService,
        private categoryStateService: CategoryStateService,
        private clubStateService: ClubStateService
    ) {
        super();

        this.readClubsOrAssociations$$ = new Subject();
        this.associations$$ = new ReplaySubject();
        this.clubs$$ = new ReplaySubject();
        this.instance$ = new ReplaySubject();
    }

    public categorySelectChangeHandler(category: Category): void {
        this.clubStateService.dispatchListClubsByCategoryId$(category.uid || '');

        this.readClubsOrAssociations$$.next(category.uid || '');
    }

    public changeChampionshipHandler(championship: Championship): void {
        this.competition = championship;
    }

    public doneSteps(): void {
        this.onSubmit();
    }

    public init$(viewChildren: any[], currentStep$$: Subject<number>): Observable<boolean> {
        this.currentStep$$ = currentStep$$;
        this.templates = viewChildren;
        this.buttonAction = 'Create';

        this.template$$.next(this.templates[this.current]);
        this.types$ = of(this.TYPES);
        this.categories$ = this.categoryStateService
            .selectEntities$()
            .pipe(map((categories) => categories as Category[]));

        this.readClubsOrAssociations$$
            .pipe(
                switchMap((categoryId) => {
                    this.clubStateService.dispatchListClubsByCategoryId$(categoryId);
                    this.associationStateService.dispatchListAssociationsByCategoryId$(categoryId);

                    return this.clubStateService.selectClubsByCategoryId$(categoryId).pipe(
                        map((clubs) => ({
                            categoryId,
                            clubs,
                        }))
                    );
                }),
                switchMap(({ categoryId, clubs }) =>
                    this.associationStateService.selectAssociationsByCategoryId$(categoryId).pipe(
                        map((associations) => ({
                            clubs,
                            associations,
                        }))
                    )
                ),
                tap(({ clubs, associations }) => {
                    this.associations$$.next(associations);
                    this.clubs$$.next(clubs);
                }),
                takeUntil(this.destroy)
            )
            .subscribe();

        this.initCompetitionForm(this.i18nService.getAvailableLanguages());
        this.initCompetition();

        return of(true);
    }

    public nextStep(): void {
        this.current += 1;
        this.currentStep$$.next(this.current);

        if (this.current === 1) {
            this.template$$.next(this.templates[this.current].get('advanced_' + this.competitionForm.value['type']));
            this.instance$.next({
                ...this.competition,
                ...this.competitionForm.value,
            });
        } else if (this.current > 1) {
            this.template$$.next(this.templates[this.current]);
            this.instance$.next(this.competition as Championship);
        }
    }

    public onSubmit(): void {
        const competitionModel = this.competitionForm.value;

        if (this.editedCompetition) {
            this.updateCompetition({ ...competitionModel, ...this.competition });
        } else {
            this.createCompetition({ ...competitionModel, ...this.competition });
        }

        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
    }

    public previousStep(): void {
        this.current -= 1;
        this.currentStep$$.next(this.current);

        if (this.current === 1) {
            this.template$$.next(this.templates[this.current].get('advanced_' + this.competitionForm.value['type']));
        } else {
            this.template$$.next(this.templates[this.current]);
        }
    }

    private createCompetition(competitionModel: any): void {
        this.competitionStateService.dispatchAddEntityAction({
            ...competitionModel,
            category: competitionModel.category,
            owner: { ...competitionModel.owner },
            fromTo: competitionModel.fromTo
                ? competitionModel.fromTo.map((item: any) => moment(item).valueOf())
                : competitionModel.fromTo,
        });
    }

    private initCompetition(): void {
        this.competition$ = this.activatedRoute.paramMap.pipe(
            switchMap((params: ParamMap) => {
                const uid = params.get('competitionId');

                if (uid && uid !== '0') {
                    this.competitionStateService.dispatchSelectCompetitionAction(uid);

                    return this.competitionStateService
                        .selectSelectedEntity$()
                        .pipe(map((entity) => entity as Competition));
                } else {
                    return new Observable<Competition>();
                }
            })
        );

        this.competition$.pipe(takeUntil(this.destroy)).subscribe((competition) => {
            if (competition) {
                const categoryId: string = competition.category.uid || '';

                this.clubStateService.dispatchListClubsByCategoryId$(categoryId);

                this.associationStateService.dispatchListAssociationsByCategoryId$(categoryId);

                this.readClubsOrAssociations$$.next(categoryId);
                this.competition = competition;

                this.competitionForm.patchValue({
                    category: competition.category,
                    fromTo: competition.fromTo.map((date) => new Date(date)),
                    name: competition.name,
                    owner: competition.owner,
                    type: competition.type,
                    rule: competition.rule,
                    uid: competition.uid,
                });

                this.editedCompetition = competition;
                this.buttonAction = 'Update';
            }
        });
    }

    private initCompetitionForm(languages: string[]): void {
        const nameI18n: any = {};

        languages.map((language) => {
            nameI18n['name_' + language] = [null, Validators.required];
        });

        this.competitionForm = this.formBuilder.group({
            category: [null, Validators.required],
            fromTo: [null, Validators.required],
            name: [null, Validators.required],
            owner: [null, Validators.required],
            type: [null, Validators.required],
            rule: null,
            uid: [''],
        });
    }

    private updateCompetition(competitionModel: any): void {
        this.competitionStateService.dispatchUpdateEntityAction({
            ...competitionModel,
            category: competitionModel.category,
            owner: competitionModel.owner,
            fromTo: competitionModel.fromTo
                ? competitionModel.fromTo.map((item: any) => moment(item).valueOf())
                : competitionModel.fromTo,
        });
    }
}
