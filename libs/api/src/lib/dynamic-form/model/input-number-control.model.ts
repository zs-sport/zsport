import { ControlBaseModel } from './control-base.model';

export interface InputNumberControlModel extends ControlBaseModel<number> {
    max: number;
    min: number;
    step: number;
    modelChangeHandler?: any;
}
