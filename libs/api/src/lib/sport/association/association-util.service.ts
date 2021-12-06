import { EntityUtilService } from '../../base';
import { EntityQuantity } from '../../entity-quantity';
import { Association } from './associtation';

export abstract class AssociationUtilService extends EntityUtilService {
    public abstract updateEntityQuantity(entityQuantity: EntityQuantity, association: Association): EntityQuantity;
}
