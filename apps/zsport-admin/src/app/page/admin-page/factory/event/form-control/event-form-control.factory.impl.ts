import { combineLatest, Observable, Observer, of, pipe, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AgeGroup,
    AgeGroupUtilService,
    Category,
    CategoryStateService,
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    Event,
    Gender,
    GenderUtilService,
    I18nService,
    Location,
    Team,
    TeamStateService,
} from '@zsport/api';
import { EventFormControlFactory } from '@zsport/domain/sport/event/form';

@Injectable()
export class EventFormControlFactoryImpl extends EventFormControlFactory {
    private ageGroups!: AgeGroup[];
    private categories!: Category[];
    private controls!: ControlBase<any>[];
    private data!: Event;
    private genders!: Gender[];
    private location: Location | null = null;
    private observer!: Observer<ControlBase<any>[]>;
    private selectedAgeGroup: AgeGroup | null = null;
    private selectedAgeGroup$$: Subject<AgeGroup | null>;
    private selectedCategory: Category | null = null;
    private selectedCategory$$: Subject<Category | null>;
    private selectedGender: Gender | null = null;
    private selectedGender$$: Subject<Gender | null>;
    private selectedTeam: Team | null = null;
    private teams!: Team[];

    public constructor(
        private ageGroupUtilService: AgeGroupUtilService,
        private genderUtilService: GenderUtilService,
        private i18nService: I18nService,
        private categoryStateService: CategoryStateService,
        private teamStateService: TeamStateService
    ) {
        super();

        this.selectedAgeGroup$$ = new ReplaySubject();
        this.selectedGender$$ = new ReplaySubject();
        this.selectedCategory$$ = new ReplaySubject();
    }

    public createControls(
        data: Event,
        categories: Category[],
        genders: Gender[],
        ageGroups: AgeGroup[],
        teams: Team[],
        homeTeam: Team | null
    ): ControlBase<any>[] {
        return [
            this.createHiddenControl({
                key: 'uid',
                order: 1,
                type: 'hidden',
                validators: [],
                value: data ? data.uid : null,
            }),
            this.createHiddenControl({
                key: 'dates',
                order: 2,
                type: 'hidden',
                validators: [],
                value: data ? data.dates : null,
            }),
            this.createHiddenControl({
                key: 'states',
                order: 3,
                type: 'hidden',
                validators: [],
                value: data ? data.states : null,
            }),
            this.createHiddenControl({
                key: 'competitionId',
                order: 4,
                type: 'hidden',
                validators: [],
                value: data ? data.competitionId : null,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                modelChangeHandler: this.categoryChangeHandlerFunction,
                key: 'category',
                label: this.i18nService.translate('admin.sport.event.label.category'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(categories).pipe(
                    map((categories) =>
                        categories.map((category) => ({
                            label: (category as Category).nameI18n[this.i18nService.getActiveLang()] as string,
                            value: category as Category,
                        }))
                    )
                ),
                order: 5,
                placeholder: this.i18nService.translate('admin.sport.event.label.category_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: this.selectedCategory,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                modelChangeHandler: this.ageGroupChangeHandlerFunction,
                key: 'ageGroup',
                label: this.i18nService.translate('admin.sport.event.label.age_group'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(ageGroups).pipe(
                    map((ageGroups) =>
                        ageGroups.map((ageGroup) => ({
                            label: (ageGroup as AgeGroup).nameI18n[this.i18nService.getActiveLang()] as string,
                            value: ageGroup as AgeGroup,
                        }))
                    )
                ),
                order: 6,
                placeholder: this.i18nService.translate('admin.sport.event.label.age_group_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: this.selectedAgeGroup,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                modelChangeHandler: this.genderChangeHandlerFunction,
                key: 'gender',
                label: this.i18nService.translate('admin.sport.event.label.gender'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(genders).pipe(
                    map((genders) =>
                        genders.map((gender) => ({
                            label: (gender as Gender).nameI18n[this.i18nService.getActiveLang()] as string,
                            value: gender as Gender,
                        }))
                    )
                ),
                order: 7,
                placeholder: this.i18nService.translate('admin.sport.event.label.gender_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: this.selectedGender,
            }),
            this.createDatePickerControl({
                isShowTime: true,
                key: 'eventDayTime',
                label: this.i18nService.translate('admin.sport.event.label.event_day_time'),
                order: 8,
                placeholder: this.i18nService.translate('admin.sport.event.label.event_day_time_placeholder'),
                type: 'date_picker',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? new Date(data.eventDayTime) : null,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                modelChangeHandler: this.teamChangeHandlerFunction,
                key: 'team1',
                serverSearch: true,
                label: this.i18nService.translate('admin.sport.event.label.team1'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(teams).pipe(
                    map((teams) =>
                        teams.map((team) => ({
                            label: (team as Team).club.name,
                            value: team as Team,
                        }))
                    )
                ),
                order: 9,
                placeholder: this.i18nService.translate('admin.sport.event.label.team1_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: homeTeam,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                key: 'team2',
                serverSearch: true,
                label: this.i18nService.translate('admin.sport.event.label.team2'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(teams).pipe(
                    map((teams) =>
                        teams.map((team) => ({
                            label: (team as Team).club.name,
                            value: team as Team,
                        }))
                    )
                ),
                order: 10,
                placeholder: this.i18nService.translate('admin.sport.event.label.team2_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? data.team2 : null,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                key: 'location',
                label: this.i18nService.translate('admin.sport.event.label.location'),
                order: 11,
                placeholder: this.i18nService.translate('admin.sport.event.label.location_placeholder'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(homeTeam).pipe(
                    map((homeTeam) =>
                        homeTeam
                            ? (homeTeam.club.locations as Location[]).map((location) => ({
                                  label: location.name,
                                  value: location,
                              }))
                            : []
                    )
                ),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: this.location,
            }),
            this.createInputNumberControl({
                key: 'roundId',
                label: this.i18nService.translate('admin.sport.event.label.round_id'),
                max: 20,
                min: 0,
                step: 1,
                order: 12,
                type: 'input_number',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? data.roundId : null,
            }),
        ];
    }

    public createFormControls$(data: Event): Observable<ControlBase<any>[]> {
        this.data = data;
        this.location = data ? data.location : null;
        this.selectedAgeGroup = data ? data.ageGroup : null;
        this.selectedGender = data ? data.gender : null;
        this.selectedCategory = data ? data.category : null;
        this.selectedTeam = data ? data.team1 : null;
        this.genders = this.genderUtilService.getGenders();
        this.ageGroups = this.ageGroupUtilService.getAgeGroups();

        this.selectedAgeGroup$$.next(this.selectedAgeGroup);
        this.selectedGender$$.next(this.selectedGender);
        this.selectedCategory$$.next(this.selectedCategory);

        return combineLatest([
            this.selectedAgeGroup$$,
            this.selectedGender$$,
            this.selectedCategory$$,
            this.categoryStateService.selectEntities$(),
        ]).pipe(
            switchMap(([selectedAgeGroup, selectedGender, selectedCategory, categories]) => {
                this.categories = categories as Category[];

                const aggcId = this.createAGGCId(selectedAgeGroup, selectedGender, selectedCategory);

                this.teamStateService.dispatchListTeamsByAGGCId(aggcId);

                return this.teamStateService.selectTeamsByAGGCId$(aggcId).pipe(
                    switchMap((teams) => {
                        this.teams = teams;

                        return new Observable<ControlBase<any>[]>((observer) => {
                            this.observer = observer;

                            this.controls = this.createControls(
                                data,
                                this.categories,
                                this.genders,
                                this.ageGroups,
                                this.teams,
                                this.selectedTeam
                            );

                            observer.next(this.controls);
                        });
                    })
                );
            })
        );
    }

    private ageGroupChangeHandlerFunction = (ageGroup: AgeGroup) => {
        this.selectedAgeGroup = ageGroup;

        this.selectedAgeGroup$$.next(this.selectedAgeGroup);
    };

    private categoryChangeHandlerFunction = (category: Category) => {
        this.selectedCategory = category;

        this.selectedCategory$$.next(this.selectedCategory);
    };

    private createAGGCId(ageGroup: AgeGroup | null, gender: Gender | null, category: Category | null) {
        const ageGroupId = ageGroup ? ageGroup.uid : '';
        const genderId = gender ? gender.uid : '';
        const categoryId = category ? category.uid : '';

        return ageGroupId + '_' + genderId + '_' + categoryId;
    }

    private genderChangeHandlerFunction = (gender: Gender) => {
        this.selectedGender = gender;

        this.selectedGender$$.next(this.selectedGender);
    };

    private teamChangeHandlerFunction = (team: Team) => {
        this.selectedTeam = team;

        this.controls = this.createControls(
            this.data,
            this.categories,
            this.genders,
            this.ageGroups,
            this.teams,
            this.selectedTeam
        );

        this.observer.next(this.controls);
    };
}
