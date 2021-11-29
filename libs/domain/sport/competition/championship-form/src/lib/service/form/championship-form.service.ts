import { combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
    AgeGroup,
    AgeGroupUtilService,
    Championship,
    Club,
    Gender,
    GenderUtilService,
    I18nService,
    TeamStateService,
} from '@zsport/api';

import { ChampionshipFormBase } from '../../base';

@Injectable()
export class ChampionshipFormService extends ChampionshipFormBase {
    private ageGroups$$!: Subject<AgeGroup | null>;
    private championship!: Championship;
    private genders$$!: Subject<Gender | null>;

    public compareEntities = (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2);

    public constructor(
        private ageGroupUtilService: AgeGroupUtilService,
        private formBuilder: FormBuilder,
        private genderUtilService: GenderUtilService,
        private teamStateService: TeamStateService
    ) {
        super();
    }

    public init$(
        championship$: Observable<Championship>,
        changeChampionship: EventEmitter<Championship>
    ): Observable<boolean> {
        this.championship$ = championship$;
        this.changeChampionship = changeChampionship;
        this.buttonAction = 'Create';
        this.ageGroups$ = of(this.ageGroupUtilService.getAgeGroups());
        this.genders$ = of(this.genderUtilService.getGenders());
        this.clubs$$ = new Subject();
        this.ageGroups$$ = new ReplaySubject();
        this.genders$$ = new ReplaySubject();

        this.ageGroups$$.next(null);
        this.genders$$.next(null);

        return combineLatest([
            this.championship$,
            this.genders$$.pipe(tap(console.log)),
            this.ageGroups$$.pipe(tap(console.log)),
        ]).pipe(
            switchMap(([championship, gender, ageGroup]) => {
                const ageGroupId = ageGroup ? ageGroup.uid : championship.ageGroup.uid;
                const genderId = gender ? gender.uid : championship.gender.uid;

                const aggcId = ageGroupId + '_' + genderId + '_' + championship.category.uid;

                this.teamStateService.dispatchListTeamsByAGGCId(aggcId);

                return this.teamStateService.selectTeamsByAGGCId$(aggcId).pipe(
                    tap((sportTeams) => {
                        this.clubs$$.next(sportTeams.map((sportTeam) => ({ ...sportTeam.club })));
                    })
                );
            }),
            switchMap((data) => {
                this.initChampionshipForm();
                this.initChampionship();

                return of(true);
            })
        );
    }

    public onAgeGroupChangeHandler(event: AgeGroup): void {
        this.ageGroups$$.next(event);
    }

    public onGenderChangeHandler(event: Gender): void {
        this.genders$$.next(event);
    }

    public onSubmit(): void {
        const championshipModel = this.entityForm.value;
    }

    public resetForm(event: MouseEvent): void {
        throw new Error('Method not implemented.');
    }

    public updateEntity(entityModel: any): void {
        throw new Error('Method not implemented.');
    }

    private initChampionship(): void {
        this.championship$.pipe(takeUntil(this.destroy)).subscribe((championship) => {
            if (championship) {
                this.championship = championship;

                this.entityForm.patchValue({
                    ageGroup: championship.ageGroup,
                    gender: championship.gender,
                    clubs: championship.clubs,
                    roundIterations: championship.roundIterations,
                });

                this.buttonAction = 'Update';
            }
        });
    }

    private initChampionshipForm(): void {
        this.entityForm = this.formBuilder.group({
            ageGroup: [null, Validators.required],
            gender: [null, Validators.required],
            clubs: [null, Validators.required],
            roundIterations: [null, Validators.required],
        });

        this.entityForm.valueChanges
            .pipe(
                takeUntil(this.destroy),
                tap((values) =>
                    this.changeChampionship.next({
                        ...this.championship,
                        ...values,
                    })
                )
            )
            .subscribe();
    }
}
