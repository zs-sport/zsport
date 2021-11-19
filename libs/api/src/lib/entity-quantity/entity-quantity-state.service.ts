import { Observable } from 'rxjs';

import { EntityStateService } from '../base';
import { EntityQuantity } from './entity-quantity';

export abstract class EntityQuantityStateService extends EntityStateService {
    public constructor() {
        super();
    }
}
