import { ControlBase } from '../control';
import { DoubleNumber, DoubleNumberControlModel } from '../model';

export class DynamicDoubleNumberControl extends ControlBase<DoubleNumber> {
    public max: number;
    public min: number;
    public modelChangeHandler: any;
    public step: number;

    public constructor(doubleNumberControlModel: DoubleNumberControlModel) {
        super(doubleNumberControlModel);

        this.max = doubleNumberControlModel.max;
        this.min = doubleNumberControlModel.min;
        this.step = doubleNumberControlModel.step;
        this.modelChangeHandler = doubleNumberControlModel.modelChangeHandler;
    }
}
