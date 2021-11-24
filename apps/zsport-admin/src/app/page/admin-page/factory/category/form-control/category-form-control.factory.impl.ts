import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { CategoryEntity, ControlBase, DynamicFormValidatorNameEnum, I18nService, LanguagesEnum } from '@zsport/api';
import { CategoryFormControlFactory } from '@zsport/domain/sport/category/form';

@Injectable()
export class CategoryFormControlFactoryImpl extends CategoryFormControlFactory {
    private activeLanguage: LanguagesEnum;

    public constructor(private i18nService: I18nService) {
        super();

        this.activeLanguage = i18nService.getActiveLang();
    }

    public createFormControls$(dataModel: any): Observable<ControlBase<any>[]> {
        return of([
            this.createHiddenControl({
                key: 'uid',
                order: 1,
                type: 'hidden',
                validators: [],
                value: dataModel ? (dataModel as CategoryEntity).uid : null,
            }),
            this.createHiddenControl({
                key: 'dates',
                order: 2,
                type: 'hidden',
                validators: [],
                value: dataModel ? (dataModel as CategoryEntity).dates : null,
            }),
            this.createHiddenControl({
                key: 'states',
                order: 3,
                type: 'hidden',
                validators: [],
                value: dataModel ? (dataModel as CategoryEntity).states : null,
            }),
            this.createHiddenControl({
                key: 'rule',
                order: 4,
                type: 'hidden',
                validators: [],
                value: dataModel ? (dataModel as CategoryEntity).rule : null,
            }),
            this.createTextControl({
                key: 'nameI18n',
                label: this.i18nService.translate('admin.sport.category.label.name'),
                order: 5,
                placeholder: this.i18nService.translate('admin.sport.category.label.name_placeholder'),
                type: 'text',
                validators: [
                    { key: DynamicFormValidatorNameEnum.required, value: null },
                    { key: DynamicFormValidatorNameEnum.minLength, value: 5 },
                    { key: DynamicFormValidatorNameEnum.maxLength, value: 40 },
                ],
                value: dataModel ? (dataModel as CategoryEntity).nameI18n[this.activeLanguage] : null,
            }),
            this.createColorCircleControl({
                key: 'color',
                label: this.i18nService.translate('admin.sport.category.label.color'),
                order: 6,
                type: 'color_circle',
                value: dataModel ? (dataModel as CategoryEntity).color || '#fff' : '#fff',
            }),
        ]);
    }
}
