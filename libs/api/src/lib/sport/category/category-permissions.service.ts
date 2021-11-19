import { ActionEnum } from '../../action';
import { CategoryResourceEnum } from './category-resource.enum';

export class CategoryPermissionsService {
    static readonly createCategoryEntity =
        ActionEnum.CREATE.toString() + CategoryResourceEnum.CATEGORY_ENTITY.toString();
    static readonly deleteCategoryEntity =
        ActionEnum.DELETE.toString() + CategoryResourceEnum.CATEGORY_ENTITY.toString();
    static readonly updateCategoryEntity =
        ActionEnum.UPDATE.toString() + CategoryResourceEnum.CATEGORY_ENTITY.toString();
    static readonly viewCategoryEntity = ActionEnum.VIEW.toString() + CategoryResourceEnum.CATEGORY_ENTITY.toString();
}
