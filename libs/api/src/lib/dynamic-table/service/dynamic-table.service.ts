import { Observable } from 'rxjs';

import { BaseService, Model } from '../../base';
import { DynamicTableConfigModel } from '../model';

export abstract class DynamicTableService extends BaseService {
    public abstract createTableConfig$(): DynamicTableConfigModel;
    public abstract getData$(): Observable<Model[]>;
    public abstract getTableComponent(): unknown;
}
