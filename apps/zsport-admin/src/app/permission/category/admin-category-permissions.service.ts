import { Injectable } from '@angular/core';
import { CategoryPermissionsService, PermissionsService } from '@zsport/api';
import { CategoryAdminPermissionsService } from '@zsport/domain/sport/category/admin';

@Injectable()
export class AdminCategoryPermissionsService extends CategoryAdminPermissionsService {
    constructor() {
        super();

        PermissionsService.addPermissions([
            CategoryAdminPermissionsService.viewCategoryAdminPage,
            CategoryAdminPermissionsService.viewCategoryEditPage,
            CategoryAdminPermissionsService.viewCategoryListPage,
            CategoryPermissionsService.createCategoryEntity,
            CategoryPermissionsService.deleteCategoryEntity,
            CategoryPermissionsService.updateCategoryEntity,
            CategoryPermissionsService.viewCategoryEntity,
        ]);
    }
}
