import { DynamicFormLayoutEnum } from '../enum';

export interface FormConfigModel {
    compare?: unknown;
    formControlSpan: number;
    formLabelSpan: number;
    layout: DynamicFormLayoutEnum;
}
