import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AgeGroup,
    AgeGroupUtilService,
    CategoryEntity,
    CategoryStateService,
    ClubStateService,
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    Gender,
    GenderUtilService,
    I18nService,
    LanguagesEnum,
    TeamEntity,
} from '@zsport/api';
import { TeamFormControlFactory } from '@zsport/domain/sport/team/form';

@Injectable()
export class TeamFormControlFactoryImpl extends TeamFormControlFactory {
    private clubId!: string;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private ageGroupUtilService: AgeGroupUtilService,
        private genderUtilService: GenderUtilService,
        private i18nService: I18nService,
        private sportCategoryStateService: CategoryStateService,
        private sportClubStateService: ClubStateService
    ) {
        super();
    }

    public createFormControls$(data: TeamEntity): Observable<ControlBase<any>[]> {
        this.clubId = this.activatedRoute.snapshot.queryParams.clubId
            ? this.activatedRoute.snapshot.queryParams.clubId
            : this.clubId;

        return combineLatest([
            this.sportCategoryStateService.selectEntities$(),
            this.sportClubStateService.selectEntityById$(this.clubId),
        ]).pipe(
            switchMap(([categories, club]) => {
                return of([
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
                        key: 'club',
                        order: 4,
                        type: 'hidden',
                        validators: [],
                        value: club,
                    }),
                    this.createSelectControl({
                        compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'category',
                        label: this.i18nService.translate('admin.sport.team.label.category'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(categories).pipe(
                            map((categories) =>
                                categories.map((category) => ({
                                    label: (category as CategoryEntity).nameI18n[
                                        this.i18nService.getActiveLang()
                                    ] as string,
                                    value: category as CategoryEntity,
                                }))
                            )
                        ),
                        order: 5,
                        placeholder: this.i18nService.translate('admin.sport.team.label.category_placeholder'),
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? data.category : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'gender',
                        label: this.i18nService.translate('admin.sport.team.label.gender'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(this.genderUtilService.getGenders()).pipe(
                            map((genders) =>
                                genders.map((gender) => ({
                                    label: (gender as Gender).nameI18n[this.i18nService.getActiveLang()] as string,
                                    value: gender as Gender,
                                }))
                            )
                        ),
                        order: 6,
                        placeholder: this.i18nService.translate('admin.sport.team.label.gender_placeholder'),
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? data.gender : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'ageGroup',
                        label: this.i18nService.translate('admin.sport.team.label.age_group'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(this.ageGroupUtilService.getAgeGroups()).pipe(
                            map((ageGroups) =>
                                ageGroups.map((ageGroup) => ({
                                    label: (ageGroup as AgeGroup).nameI18n[this.i18nService.getActiveLang()] as string,
                                    value: ageGroup as AgeGroup,
                                }))
                            )
                        ),
                        order: 7,
                        placeholder: this.i18nService.translate('admin.sport.team.label.age_group_placeholder'),
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? data.ageGroup : null,
                    }),
                ]);
            })
        );
    }
}
