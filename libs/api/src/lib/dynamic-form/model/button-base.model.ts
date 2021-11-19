import { DynamicFormButtonTypeEnum } from '../enum';

export interface ButtonBaseModel {
    buttonType: DynamicFormButtonTypeEnum;
    clickHandler: Function;
    order: number;
    title: string;
}
