import { SelectIcon, SelectIconControlModel } from '../model';
import { DynamicSelectControl } from './dynamic-select.control';

export class DynamicSelectIconControl<T> extends DynamicSelectControl<T> {
    public icons: SelectIcon[];

    public constructor(selectIconControlModel: SelectIconControlModel<T>) {
        super(selectIconControlModel);

        this.icons = selectIconControlModel.icons;
    }
}
