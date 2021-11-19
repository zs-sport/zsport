import { Component, Input } from '@angular/core';

import { BaseComponent } from '../../base';
import { ButtonBase } from '../button';
import { FormConfig } from '../config';
import { ControlBase } from '../control';
import { DynamicFormButtonTypeEnum, DynamicFormElementTypeEnum } from '../enum';

@Component({
    template: '',
})
export abstract class DynamicFormComponent extends BaseComponent {
    @Input()
    public buttons!: ButtonBase[];
    @Input()
    public config!: FormConfig;
    @Input()
    public controls!: ControlBase<any>[];
    public dynamicFormButtonTypes!: any;
    public dynamicFormElementTypes!: any;

    public constructor() {
        super();

        this.dynamicFormButtonTypes = {
            cancel: DynamicFormButtonTypeEnum.cancel,
            reset: DynamicFormButtonTypeEnum.reset,
            submit: DynamicFormButtonTypeEnum.submit,
        };

        this.dynamicFormElementTypes = {
            checkbox: DynamicFormElementTypeEnum.CHECKBOX,
            colorCircle: DynamicFormElementTypeEnum.COLOR_CIRCLE,
            datePicker: DynamicFormElementTypeEnum.DATE_PICKER,
            doubleNumber: DynamicFormElementTypeEnum.DOUBLE_NUMBER,
            email: DynamicFormElementTypeEnum.email,
            file: DynamicFormElementTypeEnum.FILE,
            group: DynamicFormElementTypeEnum.GROUP,
            hidden: DynamicFormElementTypeEnum.hidden,
            inputNumber: DynamicFormElementTypeEnum.INPUT_NUMBER,
            select: DynamicFormElementTypeEnum.select,
            selectIcon: DynamicFormElementTypeEnum.SELECT_ICON,
            text: DynamicFormElementTypeEnum.text,
            textArea: DynamicFormElementTypeEnum.textArea,
            phone: DynamicFormElementTypeEnum.phone,
            radio: DynamicFormElementTypeEnum.radio,
        };
    }
}
