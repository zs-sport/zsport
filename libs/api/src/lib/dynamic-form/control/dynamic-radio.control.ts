import { RadioControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicRadioControl extends ControlBase<string> {
    public constructor(radioControlModel: RadioControlModel) {
        super(radioControlModel);
    }
}
