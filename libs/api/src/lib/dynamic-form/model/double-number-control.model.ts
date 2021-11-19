import { ControlBaseModel } from './control-base.model';
import { DoubleNumber } from './double-number.model';

export interface DoubleNumberControlModel extends ControlBaseModel<DoubleNumber> {
    max: number;
    min: number;
    modelChangeHandler?: any;
    step: number;
}
