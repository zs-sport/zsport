import { DynamicFormButtonTypeEnum } from '../enum';
import { ButtonBaseModel } from '../model';

export class ButtonBase implements ButtonBaseModel {
    public buttonType: DynamicFormButtonTypeEnum;
    public clickHandler: Function;
    public order: number;
    public title: string;

    public constructor(buttonBaseModel: ButtonBaseModel) {
        this.buttonType = buttonBaseModel.buttonType;
        this.clickHandler = buttonBaseModel.clickHandler;
        this.order = buttonBaseModel.order;
        this.title = buttonBaseModel.title;
    }
}
