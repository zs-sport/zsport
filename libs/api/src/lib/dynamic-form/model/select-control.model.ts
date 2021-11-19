import { Observable } from 'rxjs';

import { DynamicFormSelectModeEnum } from '../enum';
import { ControlBaseModel } from './control-base.model';
import { SelectOptionModel } from './select-option.model';

export interface SelectControlModel<T> extends ControlBaseModel<T> {
    compare: any;
    mode: DynamicFormSelectModeEnum;
    modelChangeHandler?: any;
    options$: Observable<SelectOptionModel[]>;
    searchHandler?: any;
    serverSearch?: boolean;
    showArrow?: boolean;
    showSearch?: boolean;
}
