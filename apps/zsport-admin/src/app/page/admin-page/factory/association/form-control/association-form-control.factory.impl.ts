import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    AssociationEntity,
    AssociationStateService,
    CategoryEntity,
    CategoryStateService,
    ControlBase,
    DynamicFormSelectModeEnum,
    DynamicFormValidatorNameEnum,
    I18nService,
    LanguagesEnum,
} from '@zsport/api';
import { AssociationFormControlFactory } from '@zsport/domain/sport/association/form';

@Injectable()
export class AssociationFormControlFactoryImpl extends AssociationFormControlFactory {
    public constructor(
        private i18nService: I18nService,
        private associationStateService: AssociationStateService,
        private categoryStateService: CategoryStateService
    ) {
        super();
    }

    public createFormControls$(dataModel: any): Observable<ControlBase<any>[]> {
        return combineLatest([
            this.categoryStateService.selectEntities$().pipe(filter((entities) => entities.length > 0)),
            this.associationStateService.selectEntities$(),
        ]).pipe(
            switchMap(([categories, associations]) => {
                return of([
                    this.createHiddenControl({
                        key: 'uid',
                        order: 1,
                        type: 'hidden',
                        validators: [],
                        value: dataModel ? (dataModel as AssociationEntity).uid : null,
                    }),
                    this.createHiddenControl({
                        key: 'dates',
                        order: 2,
                        type: 'hidden',
                        validators: [],
                        value: dataModel ? (dataModel as AssociationEntity).dates : null,
                    }),
                    this.createHiddenControl({
                        key: 'states',
                        order: 3,
                        type: 'hidden',
                        validators: [],
                        value: dataModel ? (dataModel as AssociationEntity).states : null,
                    }),
                    this.createTextControl({
                        key: 'nameI18n',
                        label: this.i18nService.translate('admin.sport.association.label.name'),
                        order: 4,
                        placeholder: this.i18nService.translate('admin.sport.association.label.name_placeholder'),
                        type: 'text',
                        validators: [
                            { key: DynamicFormValidatorNameEnum.required, value: null },
                            { key: DynamicFormValidatorNameEnum.minLength, value: 5 },
                            { key: DynamicFormValidatorNameEnum.maxLength, value: 60 },
                        ],
                        value: dataModel
                            ? (dataModel as AssociationEntity).nameI18n[this.i18nService.getActiveLang()]
                            : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'parent',
                        label: this.i18nService.translate('admin.sport.association.label.parent'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(associations).pipe(
                            map((associations) =>
                                associations.map((entity) => ({
                                    label: (entity as AssociationEntity).nameI18n[
                                        this.i18nService.getActiveLang()
                                    ] as string,
                                    value: entity as AssociationEntity,
                                }))
                            )
                        ),
                        order: 5,
                        placeholder: this.i18nService.translate('admin.sport.association.label.parent_placeholder'),
                        type: 'select',
                        validators: [],
                        value: dataModel ? (dataModel as AssociationEntity).parent : null,
                    }),
                    this.createSelectControl({
                        compare: (o1: any, o2: any): boolean => (o1 && o2 ? o1.uid === o2.uid : o1 === o2),
                        key: 'category',
                        label: this.i18nService.translate('admin.sport.association.label.category'),
                        mode: DynamicFormSelectModeEnum.default,
                        options$: of(categories).pipe(
                            map((categories) =>
                                categories.map((entity) => ({
                                    label: (entity as CategoryEntity).nameI18n[
                                        this.i18nService.getActiveLang()
                                    ] as string,
                                    value: entity as CategoryEntity,
                                }))
                            )
                        ),
                        order: 6,
                        placeholder: this.i18nService.translate('admin.sport.association.label.category_placeholder'),
                        type: 'select',
                        validators: [{ key: DynamicFormValidatorNameEnum.required, value: null }],
                        value: dataModel ? (dataModel as AssociationEntity).category : null,
                    }),
                ]);
            })
        );
    }
}
