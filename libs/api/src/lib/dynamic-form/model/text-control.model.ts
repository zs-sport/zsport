import { ControlBaseModel } from './control-base.model';

export interface TextControlModel extends ControlBaseModel<string> {
    modelChangeHandler?: any;
}
