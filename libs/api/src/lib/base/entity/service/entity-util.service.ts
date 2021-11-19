import { Model } from '../../model';
import { BaseService } from '../../service';
import { Entity } from '../base/entity';

export abstract class EntityUtilService extends BaseService {
    protected activeLanguage: string = '';

    public abstract convertEntityToModel(entity: Entity, isVersion: boolean): Model;
    public abstract convertModelToEntity(model: Model): Entity;
    public abstract getSimpleEntity(model: Model): Partial<Entity>;
}
