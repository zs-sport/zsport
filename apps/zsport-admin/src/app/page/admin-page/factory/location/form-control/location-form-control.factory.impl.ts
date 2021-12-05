import { Observable, Observer, of } from 'rxjs';
import { first, map, skip, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import {
    ControlBase,
    Country,
    CountryUtilService,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    I18nService,
    Identifiable,
    LocationEntity,
    LocationTypeEnum,
    StorageDataService,
    StorageUtilService,
} from '@zsport/api';
import { LocationFormControlFactory } from '@zsport/domain/location/form';

@Injectable()
export class LocationFormControlFactoryImpl extends LocationFormControlFactory {
    private activeLanguage: string;
    private countries: Country[] = [];

    public constructor(
        private i18nService: I18nService,
        private countryUtilService: CountryUtilService,
        private storageDataService: StorageDataService,
        private storageUtilService: StorageUtilService
    ) {
        super();

        this.activeLanguage = i18nService.getActiveLangAsString();
        this.countries = this.countryUtilService.getCountries();
    }

    public createFormControls$(data: LocationEntity): Observable<ControlBase<any>[]> {
        return new Observable<ControlBase<any>[]>((observer) => {
            const fileEventHandlerFunction = (event: any) => {
                this.uploadFile(event, controls, data.name, observer);
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
                    key: 'name',
                    label: this.i18nService.translate('admin.location.label.name'),
                    order: 4,
                    placeholder: this.i18nService.translate('admin.location.label.name_placeholder'),
                    type: 'text',
                    validators: [
                        { key: DynamicFormValidatorNameEnum.required, value: null },
                        { key: DynamicFormValidatorNameEnum.minLength, value: 3 },
                        { key: DynamicFormValidatorNameEnum.maxLength, value: 40 },
                    ],
                    value: data ? data.name : null,
                }),
                this.createSelectControl({
                    compare: (o1: any, o2: any): boolean => o1 === o2,
                    key: 'type',
                    label: this.i18nService.translate('admin.location.label.type'),
                    mode: DynamicFormSelectModeEnum.default,
                    options$: of(Object.values(LocationTypeEnum)).pipe(
                        map((locationTypes) =>
                            locationTypes.map((locationType) => ({
                                label: locationType,
                                value: locationType,
                            }))
                        )
                    ),
                    order: 5,
                    placeholder: this.i18nService.translate('admin.location.label.type_placeholder'),
                    type: 'select',
                    validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                    value: data ? data.type : null,
                }),
                this.createTextAreaControl({
                    key: 'descriptionI18n',
                    label: this.i18nService.translate('admin.location.label.description'),
                    order: 6,
                    placeholder: this.i18nService.translate('admin.location.label.description_placeholder'),
                    type: 'textarea',
                    validators: [
                        { key: DynamicFormValidatorNameEnum.required, value: null },
                        { key: DynamicFormValidatorNameEnum.minLength, value: 40 },
                        { key: DynamicFormValidatorNameEnum.maxLength, value: 300 },
                    ],
                    value: data && data.descriptionI18n ? (data.descriptionI18n as any)[this.activeLanguage] : null,
                }),
                this.createFileControl({
                    fileEventHandler: fileEventHandlerFunction,
                    fileName: data ? data.name : '',
                    key: 'photo',
                    label: this.i18nService.translate('admin.location.label.photo'),
                    order: 7,
                    placeholder: this.i18nService.translate('admin.location.label.photo_placeholder'),
                    type: 'file',
                    validators: [],
                    value: data ? data.photo : null,
                }),
                this.createSelectControl({
                    compare: (o1: Identifiable, o2: Identifiable): boolean =>
                        o1 && o2 ? o1.uid === o2.uid : o1 === o2,
                    key: 'country',
                    label: this.i18nService.translate('admin.location.label.country'),
                    mode: DynamicFormSelectModeEnum.default,
                    options$: of(this.countries).pipe(
                        map((countries) =>
                            countries.map((country) => {
                                return {
                                    label: this.i18nService.getValue(country.nameI18n),
                                    value: country,
                                };
                            })
                        )
                    ),
                    order: 8,
                    placeholder: this.i18nService.translate('admin.customer.label.country_placeholder'),
                    required: true,
                    type: 'select',
                    validators: [{ key: DynamicFormValidatorNameEnum.required, value: undefined }],
                    value: data ? data.country : null,
                }),
                this.createTextControl({
                    key: 'address',
                    label: this.i18nService.translate('admin.location.label.address'),
                    order: 9,
                    placeholder: this.i18nService.translate('admin.location.label.address_placeholder'),
                    type: 'text',
                    validators: [
                        { key: DynamicFormValidatorNameEnum.required, value: null },
                        { key: DynamicFormValidatorNameEnum.minLength, value: 3 },
                        { key: DynamicFormValidatorNameEnum.maxLength, value: 40 },
                    ],
                    value: data ? data.address : null,
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
        const path = this.storageUtilService.createFilePath(name, '/location/photo/');

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
                controls[6] = {
                    ...controls[6],
                    value: downloadURL,
                };

                observer.next(controls);
            });
    }
}
