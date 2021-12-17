import { Injectable } from '@angular/core';
import { CategoryQuantityService, EntityQuantityEnum } from '@zsport/api';

@Injectable()
export class CategoryQuantityServiceImpl extends CategoryQuantityService {
    public updateGroup(categoryId: string, groups: any): any {
        let categoryGroup = groups[EntityQuantityEnum.CATEGORY] ? { ...groups[EntityQuantityEnum.CATEGORY] } : {};

        const categoryProperty = categoryGroup[categoryId || ''] || 0;

        categoryGroup[categoryId || ''] = categoryProperty + 1;

        return categoryGroup;
    }
}
