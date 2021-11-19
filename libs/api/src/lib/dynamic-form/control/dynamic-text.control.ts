import { TextControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicTextControl extends ControlBase<string> {
    public modelChangeHandler: any;

    public constructor(textControlModel: TextControlModel) {
        super(textControlModel);

        this.modelChangeHandler = textControlModel.modelChangeHandler;
    }
}
