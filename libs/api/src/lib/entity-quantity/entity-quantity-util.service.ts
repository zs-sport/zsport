import { EntityUtilService } from '../base';
import { EntityQuantity } from './entity-quantity';
import { EntityQuantityEnum } from './entity-quantity.enum';

export abstract class EntityQuantityUtilService extends EntityUtilService {
    public abstract createEntityQuantity(type: EntityQuantityEnum): EntityQuantity;
}
