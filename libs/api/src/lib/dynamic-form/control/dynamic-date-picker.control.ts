import { DatePickerControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicDatePickerControl extends ControlBase<Date> {
    public isShowTime: boolean;

    public constructor(datePickerControlModel: DatePickerControlModel) {
        super(datePickerControlModel);

        this.isShowTime = datePickerControlModel.isShowTime;
    }
}
