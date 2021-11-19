import { ResetButtonModel } from '../model';
import { ButtonBase } from './button.base';

export class DynamicResetButton extends ButtonBase {
    public constructor(resetButtonModel: ResetButtonModel) {
        super(resetButtonModel);
    }
}
