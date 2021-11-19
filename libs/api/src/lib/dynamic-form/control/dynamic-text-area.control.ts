import { TextAreaControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicTextAreaControl extends ControlBase<string> {
    public modelChangeHandler: any;

    public constructor(textAreaControlModel: TextAreaControlModel) {
        super(textAreaControlModel);

        this.modelChangeHandler = textAreaControlModel.modelChangeHandler;
    }
}
