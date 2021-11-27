import { Observable, Observer, of } from 'rxjs';
import { first, map, skip, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import {
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    Gender,
    GenderUtilService,
    I18nService,
    PersonEntity,
    SkillSet,
    SkillSetUtilService,
    StorageDataService,
    StorageUtilService,
} from '@zsport/api';
import { PersonFormControlFactory } from '@zsport/domain/person/form';

@Injectable()
export class PersonFormControlFactoryImpl extends PersonFormControlFactory {
    private activeLanguage: string;

    public constructor(
        private genderUtilService: GenderUtilService,
        private i18nService: I18nService,
        private skillSetUtilService: SkillSetUtilService,
        private storageDataService: StorageDataService,
        private storageUtilService: StorageUtilService
    ) {
        super();

        this.activeLanguage = i18nService.getActiveLangAsString();
    }

    public createFormControls$(data: PersonEntity): Observable<ControlBase<any>[]> {
        return new Observable<ControlBase<any>[]>((observer) => {
            const fileEventHandlerFunction = (event: any) => {
                this.uploadFile(event, controls, data.firstName + data.lastName, observer);
            };

            const controls = [
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
                this.createTextControl({
                    key: 'firstName',
                    label: this.i18nService.translate('admin.person.label.first_name'),
                    order: 4,
                    placeholder: this.i18nService.translate('admin.person.label.first_name_placeholder'),
                    type: 'text',
                    validators: [
                        { key: DynamicFormValidatorNameEnum.required, value: null },
                        { key: DynamicFormValidatorNameEnum.minLength, value: 2 },
                        { key: DynamicFormValidatorNameEnum.maxLength, value: 20 },
                    ],
                    value: data ? data.firstName : null,
                }),
                this.createTextControl({
                    key: 'lastName',
                    label: this.i18nService.translate('admin.person.label.last_name'),
                    order: 5,
                    placeholder: this.i18nService.translate('admin.person.label.last_name_placeholder'),
                    type: 'text',
                    validators: [
                        { key: DynamicFormValidatorNameEnum.required, value: null },
                        { key: DynamicFormValidatorNameEnum.minLength, value: 2 },
                        { key: DynamicFormValidatorNameEnum.maxLength, value: 20 },
                    ],
                    value: data ? data.lastName : null,
                }),
                this.createEmailControl({
                    key: 'email',
                    label: this.i18nService.translate('admin.person.label.email'),
                    order: 6,
                    placeholder: this.i18nService.translate('admin.person.label.email_placeholder'),
                    type: 'email',
                    validators: [{ key: DynamicFormValidatorNameEnum.email, value: null }],
                    value: data ? data.email : null,
                }),
                this.createTextControl({
                    key: 'nickName',
                    label: this.i18nService.translate('admin.person.label.nick_name'),
                    order: 7,
                    placeholder: this.i18nService.translate('admin.person.label.nick_name_placeholder'),
                    type: 'text',
                    validators: [
                        { key: DynamicFormValidatorNameEnum.minLength, value: 2 },
                        { key: DynamicFormValidatorNameEnum.maxLength, value: 20 },
                    ],
                    value: data ? data.nickName : null,
                }),
                this.createSelectControl({
                    compare: (o1: Gender, o2: Gender): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                    key: 'gender',
                    label: this.i18nService.translate('admin.person.label.gender'),
                    mode: DynamicFormSelectModeEnum.default,
                    options$: of(this.genderUtilService.getGenders()).pipe(
                        map((genders) =>
                            genders.map((gender) => ({
                                label: (gender.nameI18n as any)[this.i18nService.getActiveLang()] as string,
                                value: gender,
                            }))
                        )
                    ),
                    order: 8,
                    placeholder: this.i18nService.translate('admin.person.label.gender_placeholder'),
                    type: 'select',
                    validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                    value: data ? data.gender : null,
                }),
                this.createDatePickerControl({
                    isShowTime: true,
                    key: 'birthDay',
                    label: this.i18nService.translate('admin.person.label.birth_day'),
                    order: 9,
                    placeholder: this.i18nService.translate('admin.person.label.birth_day_placeholder'),
                    type: 'date_picker',
                    validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                    value: data ? new Date(data.birthDay) : null,
                }),
                this.createTextControl({
                    key: 'nationalityI18n',
                    label: this.i18nService.translate('admin.person.label.nationality'),
                    order: 10,
                    placeholder: this.i18nService.translate('admin.person.label.nationality_placeholder'),
                    type: 'text',
                    validators: [
                        { key: DynamicFormValidatorNameEnum.required, value: null },
                        { key: DynamicFormValidatorNameEnum.minLength, value: 2 },
                        { key: DynamicFormValidatorNameEnum.maxLength, value: 6 },
                    ],
                    value: data && data.nationalityI18n ? data.nationalityI18n[this.i18nService.getActiveLang()] : null,
                }),
                this.createSelectControl({
                    compare: (o1: SkillSet, o2: SkillSet): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                    key: 'skillSets',
                    label: this.i18nService.translate('admin.person.label.skill_sets'),
                    mode: DynamicFormSelectModeEnum.multiple,
                    options$: of(this.skillSetUtilService.getSkillSets()).pipe(
                        map((skillSets) =>
                            skillSets.map((skillSet) => ({
                                label: skillSet.nameI18n[this.i18nService.getActiveLang()] as string,
                                value: skillSet,
                            }))
                        )
                    ),
                    order: 11,
                    placeholder: this.i18nService.translate('admin.person.label.skill_sets_placeholder'),
                    type: 'select',
                    validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                    value: data ? data.skillSets : null,
                }),
                this.createFileControl({
                    fileEventHandler: fileEventHandlerFunction,
                    fileName: data && data.image ? data.firstName : '',
                    key: 'image',
                    label: this.i18nService.translate('admin.person.label.image'),
                    order: 12,
                    placeholder: this.i18nService.translate('admin.person.label.image_placeholder'),
                    type: 'file',
                    validators: [],
                    value: data ? data.image : null,
                }),
            ];

            observer.next(controls);
        });
    }

    public uploadFile(
        event: any,
        controls: ControlBase<any>[],
        name: string,
        observer: Observer<ControlBase<any>[]>
    ): void {
        const path = this.storageUtilService.createFilePath(name, '/person/image/');

        (
            this.storageDataService.put({
                content: event,
                path: path,
                meta: { type: 'image' },
                uid: null,
            }) as AngularFireUploadTask
        )
            .snapshotChanges()
            .pipe(
                skip(1),
                switchMap(() => this.storageDataService.getDownloadURL(path)),
                first()
            )
            .subscribe((downloadURL) => {
                controls[11] = {
                    ...controls[11],
                    value: downloadURL,
                };

                observer.next(controls);
            });
    }
}
