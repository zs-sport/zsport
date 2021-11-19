import { SelectControlModel } from './select-control.model';
import { SelectIcon } from './select-icon.model';

export interface SelectIconControlModel<T> extends SelectControlModel<T> {
    icons: SelectIcon[];
}
