export interface DynamicColumnHeaderModel {
    compare?: any;
    filterFn?: any;
    filterMultiple?: boolean;
    listOfFilter: Array<{ text: string; value: any; byDefault?: boolean }>;
    priority?: number;
    title: string;
}
