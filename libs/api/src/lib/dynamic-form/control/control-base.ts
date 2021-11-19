import { KeyValue } from '@angular/common';

import { DynamicFormElementTypeEnum, DynamicFormValidatorNameEnum } from '../enum';
import { ControlBaseModel } from '../model';

export class ControlBase<T> implements ControlBaseModel<T> {
    public controlType?: DynamicFormElementTypeEnum;
    public disabled?: boolean;
    public key?: string;
    public controls?: ControlBase<any>[];
    public label?: string;
    public order?: number;
    public placeholder?: string;
    public required?: boolean;
    public type?: string;
    public validators?: KeyValue<DynamicFormValidatorNameEnum, any>[];
    public value?: T | null | undefined;

    public constructor(controlBaseModel: ControlBaseModel<T>) {
        this.controlType = controlBaseModel.controlType;
        this.disabled = controlBaseModel.disabled;
        this.key = controlBaseModel.key;
        this.controls = controlBaseModel.controls;
        this.label = controlBaseModel.label;
        this.order = controlBaseModel.order;
        this.placeholder = controlBaseModel.placeholder;
        this.required = controlBaseModel.required;
        this.type = controlBaseModel.type;
        this.validators = controlBaseModel.validators;
        this.value = controlBaseModel.value;
    }
}
