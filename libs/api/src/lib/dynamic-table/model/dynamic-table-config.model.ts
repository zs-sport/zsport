import { DynamicTableSizeEnum } from '../enum';
import { DynamicColumnHeaderModel } from './dynamic-column-header.model';
import { DynamicColumnModel } from './dynamic-column.model';

export interface DynamicTableConfigModel {
    columnHeaders: DynamicColumnHeaderModel[];
    columns: DynamicColumnModel[];
    id?: string;
    isSortable: boolean;
    isExpandable?: boolean;
    expandSetName?: string;
    expandSetItemName?: string;
    size: DynamicTableSizeEnum;
}
