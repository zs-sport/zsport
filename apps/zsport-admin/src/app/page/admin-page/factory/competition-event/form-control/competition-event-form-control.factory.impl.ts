import { map, Observable, Observer, of } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    AgeGroup,
    Category,
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    Event,
    Gender,
    I18nService,
    Location,
    LocationStateService,
    Team,
} from '@zsport/api';
import { EventCompetitionFormControlFactory } from '@zsport/domain/sport/event/competition-form';

@Injectable()
export class CompetitionEventFormControlFactoryImpl extends EventCompetitionFormControlFactory {
    private ageGroups!: AgeGroup[];
    private categories!: Category[];
    private controls!: ControlBase<any>[];
    private dataModel!: Event;
    private genders!: Gender[];
    private observer: any;
    private teamChangeHandlerFunction = (team: Team) => {
        this.controls = this.createControls(
            this.dataModel,
            this.categories,
            this.genders,
            this.ageGroups,
            this.teams,
            team
        );

        this.observer.next(this.controls);
    };

    private teams!: Team[];

    public constructor(private i18nService: I18nService) {
        super();
    }

    public createControls(
        data: Event,
        categories: Category[],
        genders: Gender[],
        ageGroups: AgeGroup[],
        teams: Team[],
        homeTeam: Team
    ): ControlBase<any>[] {
        return [
            this.createHiddenControl({
                key: 'uid',
                order: 1,
                type: 'hidden',
                validators: [],
                value: data ? (data as Event).uid : null,
            }),
            this.createHiddenControl({
                key: 'dates',
                order: 2,
                type: 'hidden',
                validators: [],
                value: data ? (data as Event).dates : null,
            }),
            this.createHiddenControl({
                key: 'states',
                order: 3,
                type: 'hidden',
                validators: [],
                value: data ? (data as Event).states : null,
            }),
            this.createHiddenControl({
                key: 'competitionId',
                order: 4,
                type: 'hidden',
                validators: [],
                value: data ? (data as Event).competitionId : null,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                key: 'category',
                label: this.i18nService.translate('admin.sport.event.label.category'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(categories).pipe(
                    map((categories) =>
                        categories.map((category) => ({
                            label: category.nameI18n[this.i18nService.getActiveLang()] as string,
                            value: category,
                        }))
                    )
                ),
                order: 5,
                placeholder: this.i18nService.translate('admin.sport.event.label.category_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? (data as Event).category : null,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                key: 'ageGroup',
                label: this.i18nService.translate('admin.sport.event.label.age_group'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(ageGroups).pipe(
                    map((ageGroups) =>
                        ageGroups.map((ageGroup) => ({
                            label: ageGroup.nameI18n[this.i18nService.getActiveLang()] as string,
                            value: ageGroup,
                        }))
                    )
                ),
                order: 6,
                placeholder: this.i18nService.translate('admin.sport.event.label.age_group_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? (data as Event).ageGroup : null,
            }),
            this.createSelectControl({
                compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                key: 'gender',
                label: this.i18nService.translate('admin.sport.event.label.gender'),
                mode: DynamicFormSelectModeEnum.default,
                options$: of(genders).pipe(
                    map((genders) =>
                        genders.map((gender) => ({
                            label: gender.nameI18n[this.i18nService.getActiveLang()] as string,
                            value: gender,
                        }))
                    )
                ),
                order: 7,
                placeholder: this.i18nService.translate('admin.sport.event.label.gender_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? (data as Event).gender : null,
            }),
            this.createDatePickerControl({
                isShowTime: true,
                key: 'eventDayTime',
                label: this.i18nService.translate('admin.sport.event.label.event_day_time'),
                order: 8,
                placeholder: this.i18nService.translate('admin.sport.event.label.event_day_time_placeholder'),
                type: 'date_picker',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data && data.eventDayTime ? new Date(data.eventDayTime) : new Date(),
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
                            label: team.club.name,
                            value: team,
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
                            label: team.club.name,
                            value: team,
                        }))
                    )
                ),
                order: 10,
                placeholder: this.i18nService.translate('admin.sport.event.label.team2_placeholder'),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? (data as Event).team2 : null,
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
                        homeTeam && homeTeam.club.locations
                            ? (homeTeam.club.locations as Location[]).map((location) => ({
                                  label: location.name,
                                  value: location,
                              }))
                            : []
                    )
                ),
                type: 'select',
                validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                value: data ? (data as Event).location : null,
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
                value: data ? (data as Event).roundId : null,
            }),
        ];
    }

    public createFormControlsForEvent$(
        dataModel: Event,
        categories: Category[],
        genders: Gender[],
        ageGroups: AgeGroup[],
        teams: Team[]
    ): Observable<ControlBase<any>[]> {
        this.dataModel = dataModel;
        this.categories = categories;
        this.genders = genders;
        this.ageGroups = ageGroups;
        this.teams = teams;

        return new Observable<ControlBase<any>[]>((observer) => {
            this.observer = observer;

            const selectedHomeTeam: Team = (dataModel as Event).team1 || null;

            this.controls = this.createControls(dataModel, categories, genders, ageGroups, teams, selectedHomeTeam);

            observer.next(this.controls);
        });
    }
}
