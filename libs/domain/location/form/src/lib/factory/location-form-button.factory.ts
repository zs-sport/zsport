import { ButtonBase, DynamicFormButtonFactory, LocationEntity } from '@zsport/api';

export abstract class LocationFormButtonFactory extends DynamicFormButtonFactory {
    public abstract createFormButtons(location?: LocationEntity): ButtonBase[];
}
