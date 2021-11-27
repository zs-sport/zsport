import { ButtonBase, DynamicFormButtonFactory, PersonEntity } from '@zsport/api';

export abstract class PersonFormButtonFactory extends DynamicFormButtonFactory {
    public abstract createFormButtons(person?: PersonEntity): ButtonBase[];
}
