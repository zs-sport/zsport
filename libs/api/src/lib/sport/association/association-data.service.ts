import { Observable } from 'rxjs';

import { EntityDataService } from '../../base';
import { AssociationModel } from './association.model';

export abstract class AssociationDataService extends EntityDataService {
    public abstract listAssociationsByCategoryId(categoryId: string): Observable<AssociationModel[]>;
}
