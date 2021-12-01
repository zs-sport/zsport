import { combineLatest, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';

import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
    AgeGroup,
    AgeGroupUtilService,
    Competition,
    Gender,
    GenderUtilService,
    I18nService,
    TeamStateService,
    Tournament,
} from '@zsport/api';

import { TournamentFormBase } from '../../base';

@Injectable()
export class TournamentFormService extends TournamentFormBase {
    private ageGroups$$!: Subject<AgeGroup | null>;
    private entityForm!: FormGroup;
    private genders$$!: Subject<Gender | null>;
    private tournament!: Tournament;

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
        tournament$: Observable<Tournament>,
        entityForm$$: Subject<FormGroup>,
        changeTournament: EventEmitter<Tournament>
    ): Observable<boolean> {
        this.tournament$$ = tournament$;
        this.entityForm$$ = entityForm$$;
        this.changeTournament = changeTournament;
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

        this.initTournamentForm();

        return combineLatest([
            this.tournament$$.pipe(map((tournament) => this.initTournament(tournament))),
            this.genders$$,
            this.ageGroups$$,
        ]).pipe(
            switchMap(([tournament, gender, ageGroup]) => {
                const ageGroupId = ageGroup ? ageGroup.uid : tournament.ageGroup ? tournament.ageGroup.uid : 0;
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
        this.ageGroups$$.next(event);
    }

    public onGenderChangeHandler(event: Gender): void {
        this.genders$$.next(event);
    }

    public onSubmit(): void {
        const tournamentModel = this.entityForm.value;
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
                gender: this.tournament.gender,
                clubs: this.tournament.clubs,
                groupLevels: this.tournament.groupLevels,
            });

            this.buttonAction = 'Update';
            this.entityForm$$.next(this.entityForm);
        }

        return tournament;
    }

    private initTournamentForm(): void {
        this.entityForm = this.formBuilder.group({
            ageGroup: [null, Validators.required],
            gender: [null, Validators.required],
            clubs: [null, Validators.required],
            groupLevels: [null, Validators.required],
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
