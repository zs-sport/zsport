import { BaseService } from '../base';
import { Creatable } from './creatable';
import { Dateable } from './dateable';
import { Dates } from './dates';
import { Stateable } from './stateable';

export abstract class StateUtilService extends BaseService {
    public abstract addCreatorId(creatable: Creatable): Creatable;
    public abstract addDefaultDates(dateable: Dateable): Dateable;
    public abstract addDefaultState(stateable: Stateable): Stateable;
    public abstract createDates(): Dates;
    public abstract modifyDates(dates: Dates): Dates;
    public abstract updateActiveState(stateable: Stateable, isActive: boolean): Stateable;
    public abstract updateDates(dateable: Dateable): Dateable;
    public abstract updatePublishDate(dateable: Dateable): Dateable;
    public abstract updatePublishState(stateable: Stateable, isPublished: boolean): Stateable;
    public abstract updateReleaseDate(dateable: Dateable): Dateable;
    public abstract updateReleaseState(stateable: Stateable, isReleased: boolean): Stateable;
}
