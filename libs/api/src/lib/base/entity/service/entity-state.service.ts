import { Observable } from 'rxjs';

import { BaseService } from '../../service';
import { Entity } from '../base/entity';

export abstract class EntityStateService extends BaseService {
    public abstract dispatchAddEntityAction(entity: Entity): void;
    public abstract dispatchDeleteEntityAction(uid: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchLoadEntitiesByIdsAction(uids: string[]): void;
    public abstract dispatchLoadEntityAction(uid: string): void;
    public abstract dispatchSetSelectedEntityIdAction(entityId: string): void;
    public abstract dispatchUpdateEntityAction(entity: Entity): void;
    public abstract isLoading$(): Observable<boolean>;
    public abstract selectEntities$(): Observable<Entity[]>;
    public abstract selectEntityById$(entityId: string): Observable<Entity | undefined>;
    public abstract selectSelectedEntity$(): Observable<Entity | undefined>;
    public abstract selectSelectedEntityID$(): Observable<string>;
}
