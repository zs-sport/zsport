import { CheckboxControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicCheckboxControl extends ControlBase<boolean> {
    public constructor(checkboxControlModel: CheckboxControlModel) {
        super(checkboxControlModel);
    }
}
