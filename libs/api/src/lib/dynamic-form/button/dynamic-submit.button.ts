import { SubmitButtonModel } from '../model';
import { ButtonBase } from './button.base';

export class DynamicSubmitButton extends ButtonBase {
    public constructor(submitButtonModel: SubmitButtonModel) {
        super(submitButtonModel);
    }
}
