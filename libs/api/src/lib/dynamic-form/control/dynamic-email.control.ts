import { EmailControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicEmailControl extends ControlBase<string> {
    public constructor(emailControlModel: EmailControlModel) {
        super(emailControlModel);
    }
}
