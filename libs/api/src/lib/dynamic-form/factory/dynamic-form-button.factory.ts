import { BaseService } from '../../base';
import { ButtonBase, DynamicCancelButton, DynamicResetButton, DynamicSubmitButton } from '../button';
import { DynamicFormButtonTypeEnum } from '../enum';

export abstract class DynamicFormButtonFactory extends BaseService {
    public createCancelButton(clickHandler: Function, order: number, title: string): DynamicCancelButton {
        return new DynamicCancelButton({
            clickHandler,
            order,
            title,
            buttonType: DynamicFormButtonTypeEnum.cancel,
        });
    }

    public createResetButton(clickHandler: Function, order: number, title: string): DynamicResetButton {
        return new DynamicResetButton({
            clickHandler,
            order,
            title,
            buttonType: DynamicFormButtonTypeEnum.reset,
        });
    }

    public createSubmitButton(clickHandler: Function, order: number, title: string): DynamicSubmitButton {
        return new DynamicSubmitButton({
            clickHandler,
            order,
            title,
            buttonType: DynamicFormButtonTypeEnum.submit,
        });
    }

    public abstract createFormButtons(): ButtonBase[];
}
