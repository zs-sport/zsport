import { ButtonBase, CategoryEntity, DynamicFormButtonFactory } from '@zsport/api';

export abstract class CategoryFormButtonFactory extends DynamicFormButtonFactory {
    public abstract createFormButtons(category?: CategoryEntity): ButtonBase[];
}
