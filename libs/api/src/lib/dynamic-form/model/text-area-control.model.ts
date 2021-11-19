import { ControlBaseModel } from './control-base.model';

export interface TextAreaControlModel extends ControlBaseModel<string> {
    modelChangeHandler?: any;
}
