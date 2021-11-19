import { ControlBaseModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicGroupControl extends ControlBase<any> {
    public constructor(groupControlModel: ControlBaseModel<any>) {
        super(groupControlModel);
    }
}
