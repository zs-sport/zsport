import { Observable } from 'rxjs';

import { DynamicFormSelectModeEnum } from '../enum';
import { SelectControlModel, SelectOptionModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicSelectControl<T> extends ControlBase<T> {
    public compare: any;
    public mode: DynamicFormSelectModeEnum;
    public modelChangeHandler: any;
    public options$: Observable<SelectOptionModel[]>;
    public searchHandler: any;
    public serverSearch: boolean;
    public showArrow: boolean;
    public showSearch: boolean;

    public constructor(selectControlModel: SelectControlModel<T>) {
        super(selectControlModel);

        this.compare = selectControlModel.compare;
        this.showSearch = selectControlModel.showSearch || false;
        this.mode = selectControlModel.mode;
        this.modelChangeHandler = selectControlModel.modelChangeHandler;
        this.options$ = selectControlModel.options$;
        this.searchHandler = selectControlModel.searchHandler || false;
        this.serverSearch = selectControlModel.serverSearch || false;
        this.showArrow = selectControlModel.showArrow || false;
    }
}
