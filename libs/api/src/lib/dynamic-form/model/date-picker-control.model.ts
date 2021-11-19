import { ControlBaseModel } from './control-base.model';

export interface DatePickerControlModel extends ControlBaseModel<Date> {
    isShowTime: boolean;
}
