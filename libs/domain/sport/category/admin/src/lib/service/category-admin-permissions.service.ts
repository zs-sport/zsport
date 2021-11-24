import { Injectable } from '@angular/core';
import { ActionEnum, CategoryPermissionsService, CategoryResourceEnum } from '@zsport/api';

@Injectable()
export class CategoryAdminPermissionsService extends CategoryPermissionsService {
    static readonly viewCategoryAdminPage =
        ActionEnum.VIEW.toString() + CategoryResourceEnum.CATEGORY_ADMIN_PAGE.toString();
    static readonly viewCategoryEditPage =
        ActionEnum.VIEW.toString() + CategoryResourceEnum.CATEGORY_EDIT_PAGE.toString();
    static readonly viewCategoryListPage =
        ActionEnum.VIEW.toString() + CategoryResourceEnum.CATEGORY_LIST_PAGE.toString();
}
