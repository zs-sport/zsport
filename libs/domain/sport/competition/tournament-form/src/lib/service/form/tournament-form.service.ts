import { combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { EventEmitter, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    AgeGroup,
    AgeGroupUtilService,
    Country,
    CountryUtilService,
    Gender,
    GenderUtilService,
    TeamStateService,
    Tournament,
} from '@zsport/api';

import { TournamentFormBase } from '../../base';

@Injectable()
export class TournamentFormService extends TournamentFormBase {
    private selectedAgeGroup$$!: Subject<AgeGroup | null>;
    private selectedCountry$$!: Subject<Country | null>;
    private entityForm!: FormGroup;
    private selectedGender$$!: Subject<Gender | null>;
    private tournament!: Tournament;

    public compareEntities = (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2);

    public constructor(
        private ageGroupUtilService: AgeGroupUtilService,
        private countryUtilService: CountryUtilService,
        private formBuilder: FormBuilder,
        private genderUtilService: GenderUtilService,
        private teamStateService: TeamStateService
    ) {
        super();
    }

    public addGroupLevel(): void {
        const groupLevels: FormArray = this.entityForm.controls['groupLevels'] as FormArray;
        const groupLevel: any = {
            events: [null],
            groups: [null],
            groupsNumber: [0, Validators.required],
            level: [groupLevels.length],
            isWithResults: [false],
            title: [null, Validators.required],
            winnersNumber: [0, Validators.required],
        };

        const groupLevelForm = this.formBuilder.group(groupLevel);

        groupLevels.push(groupLevelForm);
    }

    public getGroupLevels(): FormArray {
        return this.entityForm.controls['groupLevels'] as FormArray;
    }

    public init$(
        tournament$: Observable<Tournament>,
        entityForm$$: Subject<FormGroup>,
        changeTournament: EventEmitter<Tournament>
    ): Observable<boolean> {
        this.tournament$$ = tournament$;
        this.entityForm$$ = entityForm$$;
        this.changeTournament = changeTournament;
        this.buttonAction = 'Create';
        this.ageGroupOptions$ = of(this.ageGroupUtilService.getAgeGroupOptions());
        this.genderOptions$ = of(this.genderUtilService.getGenderOptions());
        (this.countryOptions$ = of(this.countryUtilService.getCountryOptions())), (this.clubs$$ = new Subject());
        this.selectedAgeGroup$$ = new ReplaySubject();
        this.selectedGender$$ = new ReplaySubject();
        this.selectedCountry$$ = new ReplaySubject();

        this.selectedAgeGroup$$.next(null);
        this.selectedGender$$.next(null);
        this.selectedCountry$$.next(null);

        this.initTournamentForm();

        return combineLatest([
            this.tournament$$.pipe(map((tournament) => this.initTournament(tournament))),
            this.selectedGender$$,
            this.selectedAgeGroup$$,
            this.selectedCountry$$,
        ]).pipe(
            switchMap(([tournament, gender, ageGroup, country]) => {
                const ageGroupId = ageGroup ? ageGroup.uid : tournament.ageGroup ? tournament.ageGroup.uid : 0;
                const countryId = country ? country.uid : tournament.country ? tournament.country.uid : 0;
                const genderId = gender ? gender.uid : tournament.gender ? tournament.gender.uid : 0;
                const aggcId = ageGroupId + '_' + genderId + '_' + tournament.category.uid;

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
        this.selectedAgeGroup$$.next(event);
    }

    public onCountryChangeHandler(event: Country): void {
        this.selectedCountry$$.next(event);
    }

    public onGenderChangeHandler(event: Gender): void {
        this.selectedGender$$.next(event);
    }

    public onSubmit(): void {
        const tournamentModel = this.entityForm.value;
    }

    public removeGroupLevel(i: number): void {
        (this.entityForm.controls['groupLevels'] as FormArray).removeAt(i);
    }

    public resetForm(event: MouseEvent): void {
        throw new Error('Method not implemented.');
    }

    public updateEntity(entityModel: any): void {
        throw new Error('Method not implemented.');
    }

    private initTournament(tournament: Tournament): Tournament {
        if (tournament) {
            this.tournament = tournament;

            this.entityForm.patchValue({
                ageGroup: this.tournament.ageGroup,
                country: this.tournament.country,
                gender: this.tournament.gender,
                clubs: this.tournament.clubs,
                isNational: this.tournament.isNational,
            });

            const groupLevels: FormArray = this.entityForm.controls['groupLevels'] as FormArray;

            if (groupLevels.controls.length === 0 && this.tournament.groupLevels) {
                this.tournament.groupLevels.forEach((groupLevel) => {
                    const groupLevelForm = this.formBuilder.group({
                        eventIds: [groupLevel.eventIds],
                        groupsNumber: [groupLevel.groupsNumber],
                        groups: [groupLevel.groups],
                        isWithResults: [groupLevel.isWithResults],
                        level: [groupLevel.level],
                        title: [groupLevel.title, Validators.required],
                        winnersNumber: [groupLevel.winnersNumber],
                    });

                    groupLevels.push(groupLevelForm);
                });
            }

            this.buttonAction = 'Update';
            this.entityForm$$.next(this.entityForm);
        }

        return tournament;
    }

    private initTournamentForm(): void {
        this.entityForm = this.formBuilder.group({
            ageGroup: [null, Validators.required],
            country: [null, Validators.required],
            gender: [null, Validators.required],
            clubs: [null, Validators.required],
            isNational: [false],
            groupLevels: this.formBuilder.array([]),
        });

        this.entityForm.valueChanges
            .pipe(
                tap((values) =>
                    this.changeTournament.next({
                        ...this.tournament,
                        ...values,
                    })
                ),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
