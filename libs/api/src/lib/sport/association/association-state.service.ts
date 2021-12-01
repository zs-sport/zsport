import { Observable } from 'rxjs';

import { EntityStateService } from '../../base';
import { AssociationEntity } from './association.entity';

export abstract class AssociationStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListAssociationsByCategoryId$(categoryId: string): void;
    public abstract selectAssociationsByCategoryId$(categoryId: string): Observable<AssociationEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
