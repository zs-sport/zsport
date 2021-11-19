import { BaseService } from '../../base/service';
import { Entity } from '../entity';

export abstract class BaseFactory extends BaseService {
    public constructor() {
        super();
    }

    public abstract createEntities(): Entity[];
    public abstract createEntity(): Entity;
}
