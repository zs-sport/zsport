import { ColorCircleControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicColorCircleControl extends ControlBase<string> {
    public constructor(colorCircleControlModel: ColorCircleControlModel) {
        super(colorCircleControlModel);
    }
}
