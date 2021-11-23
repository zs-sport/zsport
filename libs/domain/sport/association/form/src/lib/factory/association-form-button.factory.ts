import { AssociationEntity, ButtonBase, DynamicFormButtonFactory } from '@zsport/api';

export abstract class AssociationFormButtonFactory extends DynamicFormButtonFactory {
    public abstract createFormButtons(category?: AssociationEntity): ButtonBase[];
}
