import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    AgeGroupUtilService,
    ClubStateService,
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    I18nService,
    LanguagesEnum,
    PersonEntity,
    PersonStateService,
    PlayerEntity,
    Position,
    PositionUtilService,
    Status,
    StatusUtilService,
} from '@zsport/api';
import { PlayerFormControlFactory } from '@zsport/domain/sport/player/form';

@Injectable()
export class PlayerFormControlFactoryImpl extends PlayerFormControlFactory {
    private activeLanguage: LanguagesEnum;
    private clubId!: string;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private clubStateService: ClubStateService,
        private i18nService: I18nService,
        private personStateService: PersonStateService,
        private positionUtilService: PositionUtilService,
        private statusUtilService: StatusUtilService
    ) {
        super();

        this.activeLanguage = i18nService.getActiveLang();
    }

    public createFormControls$(data: PlayerEntity): Observable<ControlBase<any>[]> {
        this.clubId = this.activatedRoute.snapshot.queryParams.clubId
            ? this.activatedRoute.snapshot.queryParams.clubId
            : this.clubId;

        return combineLatest([
            this.personStateService.selectEntities$().pipe(map((persons) => persons as PersonEntity[])),
            this.clubStateService.selectEntityById$(this.clubId),
        ]).pipe(
            switchMap(([persons, club]) => {
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
                        key: 'clubId',
                        order: 4,
                        type: 'hidden',
                        validators: [],
                        value: club ? club.uid : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'person',
                        label: this.i18nService.translate('admin.sport.player.label.person'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(persons).pipe(
                            map((persons) =>
                                persons.map((person) => ({
                                    label: person.firstName + ' ' + person.lastName,
                                    value: person,
                                }))
                            )
                        ),
                        order: 5,
                        placeholder: this.i18nService.translate('admin.sport.player.label.person_placeholder'),
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? data.person : null,
                    }),
                    this.createInputNumberControl({
                        key: 'number',
                        label: this.i18nService.translate('admin.sport.player.label.number'),
                        max: 99,
                        min: 1,
                        step: 1,
                        order: 6,
                        type: 'input_number',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? data.number : null,
                    }),
                    this.createDatePickerControl({
                        isShowTime: true,
                        key: 'fromDate',
                        label: this.i18nService.translate('admin.sport.player.label.from_date'),
                        order: 7,
                        placeholder: this.i18nService.translate('admin.sport.player.label.from_date_placeholder'),
                        type: 'date_picker',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? new Date(data.fromDate) : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: Position, o2: Position): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'position',
                        label: this.i18nService.translate('admin.sport.player.label.position'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(this.positionUtilService.getPositions('handball')).pipe(
                            map((positions) =>
                                positions.map((position) => ({
                                    label: position.nameI18n[this.activeLanguage] as string,
                                    value: position,
                                }))
                            )
                        ),
                        order: 8,
                        placeholder: this.i18nService.translate('admin.sport.player.label.position_placeholder'),
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? data.position : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: Status, o2: Status): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'status',
                        label: this.i18nService.translate('admin.sport.player.label.status'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(this.statusUtilService.getStatuses('handball')).pipe(
                            map((statuses) =>
                                statuses.map((status) => ({
                                    label: status.nameI18n[this.activeLanguage] as string,
                                    value: status,
                                }))
                            )
                        ),
                        order: 9,
                        placeholder: this.i18nService.translate('admin.sport.player.label.status_placeholder'),
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: data ? data.status : null,
                    }),
                ]);
            })
        );
    }
}
