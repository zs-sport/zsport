import { ControlBase } from './control-base';
import { HiddenControlModel } from '../model';

export class DynamicHiddenControl<T> extends ControlBase<T> {
    public constructor(hiddenControlModel: HiddenControlModel<T>) {
        super(hiddenControlModel);
    }
}
