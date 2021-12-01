import { combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    AgeGroup,
    AgeGroupUtilService,
    Championship,
    Competition,
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
    private entityForm!: FormGroup;
    private genders$$!: Subject<Gender | null>;

    public compareEntities = (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2);

    public constructor(
        private ageGroupUtilService: AgeGroupUtilService,
        private formBuilder: FormBuilder,
        private i18nService: I18nService,
        private genderUtilService: GenderUtilService,
        private teamStateService: TeamStateService
    ) {
        super();
    }

    public init$(
        championship$: Observable<Championship>,
        entityForm$$: Subject<FormGroup>,
        changeChampionship: EventEmitter<Championship>
    ): Observable<boolean> {
        this.championship$$ = championship$;
        this.entityForm$$ = entityForm$$;
        this.changeChampionship = changeChampionship;
        this.buttonAction = 'Create';
        this.ageGroupOptions$ = of(this.ageGroupUtilService.getAgeGroups()).pipe(
            map((ageGroups: AgeGroup[]) =>
                ageGroups.map((ageGroup) => ({
                    label: ageGroup.nameI18n[this.i18nService.getActiveLang()] as string,
                    value: ageGroup,
                }))
            )
        );
        this.genderOptions$ = of(this.genderUtilService.getGenders()).pipe(
            map((genders) =>
                genders.map((gender) => ({
                    label: gender.nameI18n[this.i18nService.getActiveLang()] as string,
                    value: gender,
                }))
            )
        );
        this.clubs$$ = new Subject();
        this.ageGroups$$ = new ReplaySubject();
        this.genders$$ = new ReplaySubject();

        this.ageGroups$$.next(null);
        this.genders$$.next(null);

        this.initChampionshipForm();

        return combineLatest([
            this.championship$$.pipe(map((championship) => this.initChampionship(championship))),
            this.genders$$,
            this.ageGroups$$,
        ]).pipe(
            switchMap(([championship, gender, ageGroup]) => {
                const ageGroupId = ageGroup ? ageGroup.uid : championship.ageGroup ? championship.ageGroup.uid : 0;
                const genderId = gender ? gender.uid : championship.gender ? championship.gender.uid : 0;
                const aggcId = ageGroupId + '_' + genderId + '_' + championship.category.uid;

                this.teamStateService.dispatchListTeamsByAGGCId(aggcId);

                return this.teamStateService.selectTeamsByAGGCId$(aggcId).pipe(
                    tap((teams) => {
                        this.clubs$$.next(teams.map((teams) => ({ ...teams.club })));
                    })
                );
            }),
            switchMap((data) => {
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

    private initChampionship(championship: Competition): Championship {
        if (championship) {
            this.championship = championship as Championship;

            this.entityForm.patchValue({
                ageGroup: this.championship.ageGroup,
                gender: this.championship.gender,
                clubs: this.championship.clubs,
                roundIterations: this.championship.roundIterations,
            });

            this.buttonAction = 'Update';
            this.entityForm$$.next(this.entityForm);
        }

        return championship as Championship;
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
                tap((values) =>
                    this.changeChampionship.next({
                        ...this.championship,
                        ...values,
                    })
                ),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
