import { PhoneControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicPhoneControl extends ControlBase<string> {
    public constructor(phoneControlModel: PhoneControlModel) {
        super(phoneControlModel);
    }
}
