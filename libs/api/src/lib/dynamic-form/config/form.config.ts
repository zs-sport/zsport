import { DynamicFormLayoutEnum } from '../enum';
import { FormConfigModel } from '../model';

export class FormConfig implements FormConfigModel {
    public formControlSpan: number;
    public formLabelSpan: number;
    public layout: DynamicFormLayoutEnum;

    public constructor(formConfigModel: FormConfigModel) {
        this.formControlSpan = formConfigModel.formControlSpan;
        this.formLabelSpan = formConfigModel.formLabelSpan;
        this.layout = formConfigModel.layout;
    }
}
