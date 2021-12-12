export interface DynamicColumnModel {
    actionHandler?: any;
    actionName: string;
    actionRoute: string;
    class?: string;
    helperPropertyName?: string;
    icon?: string;
    isAction?: boolean;
    isArray?: boolean;
    isDate?: boolean;
    isDoubleObject?: boolean;
    isLocalized?: boolean;
    isObject?: boolean;
    isSimple?: boolean;
    objectPropertyName: string;
    propertyName: string;
    queryParams?: any;
}
