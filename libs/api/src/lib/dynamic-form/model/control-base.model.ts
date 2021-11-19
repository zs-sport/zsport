import { KeyValue } from '@angular/common';

import { DynamicFormElementTypeEnum, DynamicFormValidatorNameEnum } from '../enum';

export interface ControlBaseModel<T> {
    controlType?: DynamicFormElementTypeEnum;
    disabled?: boolean;
    key?: string;
    controls?: ControlBaseModel<any>[];
    label?: string;
    order?: number;
    placeholder?: string;
    required?: boolean;
    type?: string;
    validators?: KeyValue<DynamicFormValidatorNameEnum, any>[];
    value?: T | null | undefined;
}
