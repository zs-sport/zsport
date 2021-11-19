import { InputNumberControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicInputNumberControl extends ControlBase<number> {
    public modelChangeHandler: any;
    public max: number;
    public min: number;
    public step: number;

    public constructor(inputNumberControlModel: InputNumberControlModel) {
        super(inputNumberControlModel);

        this.max = inputNumberControlModel.max;
        this.min = inputNumberControlModel.min;
        this.step = inputNumberControlModel.step;
        this.modelChangeHandler = inputNumberControlModel.modelChangeHandler;
    }
}
