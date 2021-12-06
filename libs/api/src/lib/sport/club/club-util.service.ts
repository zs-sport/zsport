import { EntityUtilService } from '../../base';
import { EntityQuantity } from '../../entity-quantity';
import { Club } from './club';

export abstract class ClubUtilService extends EntityUtilService {
    public abstract updateEntityQuantity(entityQuantity: EntityQuantity, club: Club): EntityQuantity;
}
