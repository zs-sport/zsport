import { CancelButtonModel } from '../model';
import { ButtonBase } from './button.base';

export class DynamicCancelButton extends ButtonBase {
    public constructor(cancelButtonModel: CancelButtonModel) {
        super(cancelButtonModel);
    }
}
