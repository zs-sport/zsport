import { combineLatest, Observable, Observer, of } from 'rxjs';
import { filter, first, map, skip, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import {
    Association,
    AssociationStateService,
    Category,
    CategoryStateService,
    ClubEntity,
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    I18nService,
    LanguagesEnum,
    LocationModel,
    LocationStateService,
    StorageDataService,
    StorageUtilService,
} from '@zsport/api';
import { ClubFormControlFactory } from '@zsport/domain/sport/club/form';

@Injectable()
export class ClubFormControlFactoryImpl extends ClubFormControlFactory {
    private activeLanguage: LanguagesEnum;

    public constructor(
        private i18nService: I18nService,
        private locationStateService: LocationStateService,
        private sportAssociationStateService: AssociationStateService,
        private categoryStateService: CategoryStateService,
        private storageDataService: StorageDataService,
        private storageUtilService: StorageUtilService
    ) {
        super();

        this.activeLanguage = i18nService.getActiveLang();
    }

    public createFormControls$(data: ClubEntity): Observable<ControlBase<any>[]> {
        return combineLatest([
            this.categoryStateService.selectEntities$().pipe(filter((entities) => entities.length > 0)),
            this.sportAssociationStateService.selectEntities$().pipe(filter((entities) => entities.length > 0)),
            this.locationStateService.selectEntities$().pipe(filter((entities) => entities.length > 0)),
        ]).pipe(
            switchMap(([categories, associations, locations]) => {
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
                            label: this.i18nService.translate('admin.sport.club.label.name'),
                            order: 4,
                            placeholder: this.i18nService.translate('admin.sport.club.label.name_placeholder'),
                            type: 'text',
                            validators: [
                                { key: DynamicFormValidatorNameEnum.required, value: null },
                                { key: DynamicFormValidatorNameEnum.minLength, value: 3 },
                                { key: DynamicFormValidatorNameEnum.maxLength, value: 40 },
                            ],
                            value: data ? data.name : null,
                        }),
                        this.createTextControl({
                            key: 'shortName',
                            label: this.i18nService.translate('admin.sport.club.label.short_name'),
                            order: 5,
                            placeholder: this.i18nService.translate('admin.sport.club.label.short_name_placeholder'),
                            type: 'text',
                            validators: [
                                { key: DynamicFormValidatorNameEnum.required, value: null },
                                { key: DynamicFormValidatorNameEnum.minLength, value: 2 },
                                { key: DynamicFormValidatorNameEnum.maxLength, value: 4 },
                            ],
                            value: data ? data.shortName : null,
                        }),
                        this.createTextControl({
                            key: 'simpleName',
                            label: this.i18nService.translate('admin.sport.club.label.simple_name'),
                            order: 6,
                            placeholder: this.i18nService.translate('admin.sport.club.label.simple_name_placeholder'),
                            type: 'text',
                            validators: [
                                { key: DynamicFormValidatorNameEnum.required, value: null },
                                { key: DynamicFormValidatorNameEnum.minLength, value: 3 },
                                { key: DynamicFormValidatorNameEnum.maxLength, value: 10 },
                            ],
                            value: data ? data.simpleName : null,
                        }),
                        this.createSelectControl({
                            compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                            key: 'association',
                            label: this.i18nService.translate('admin.sport.club.label.association'),
                            mode: DynamicFormSelectModeEnum.default,
                            options$: of(associations).pipe(
                                map((association) =>
                                    associations.map((association) => ({
                                        label: (association as Association).nameI18n[this.activeLanguage] as string,
                                        value: association as Association,
                                    }))
                                )
                            ),
                            order: 7,
                            placeholder: this.i18nService.translate('admin.sport.club.label.association_placeholder'),
                            showSearch: true,
                            type: 'select',
                            validators: [],
                            value: data ? data.association : null,
                        }),
                        this.createSelectControl({
                            compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                            key: 'category',
                            label: this.i18nService.translate('admin.sport.club.label.category'),
                            mode: DynamicFormSelectModeEnum.default,
                            options$: of(categories).pipe(
                                map((categories) =>
                                    categories.map((category) => ({
                                        label: (category as Category).nameI18n[this.activeLanguage] as string,
                                        value: category as Category,
                                    }))
                                )
                            ),
                            order: 8,
                            placeholder: this.i18nService.translate('admin.sport.club.label.category_placeholder'),
                            type: 'select',
                            validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                            value: data ? data.category : null,
                        }),
                        this.createFileControl({
                            fileEventHandler: fileEventHandlerFunction,
                            fileName: data ? data.name : '',
                            key: 'logo',
                            label: this.i18nService.translate('admin.sport.club.label.logo'),
                            order: 9,
                            placeholder: this.i18nService.translate('admin.sport.club.label.logo_placeholder'),
                            type: 'file',
                            validators: [],
                            value: data ? data.logo : null,
                        }),
                        this.createSelectControl({
                            compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                            key: 'locations',
                            label: this.i18nService.translate('admin.sport.club.label.locations'),
                            mode: DynamicFormSelectModeEnum.multiple,
                            options$: of(locations).pipe(
                                map((locations) =>
                                    locations.map((location) => ({
                                        label: (location as LocationModel).name,
                                        value: location as LocationModel,
                                    }))
                                )
                            ),
                            order: 10,
                            placeholder: this.i18nService.translate('admin.sport.club.label.locations_placeholder'),
                            type: 'select',
                            validators: [],
                            value: data ? data.locations : null,
                        }),
                        this.createCheckboxControl({
                            key: 'isNational',
                            label: this.i18nService.translate('admin.sport.club.label.is_national'),
                            order: 11,
                            type: 'checkbox',
                            validators: [],
                            value: data ? data.isNational : false,
                        }),
                    ];

                    observer.next(controls);
                });
            })
        );
    }

    public uploadFile(
        event: any,
        controls: ControlBase<any>[],
        name: string,
        observer: Observer<ControlBase<any>[]>
    ): void {
        const path = this.storageUtilService.createFilePath(name, '/club/logo/');

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
                controls[8] = {
                    ...controls[8],
                    value: downloadURL,
                };

                observer.next(controls);
            });
    }
}
