import { Observable } from 'rxjs';

import { DynamicTableConfigModel } from '../model';

export abstract class DynamicTableFactory {
    public abstract createTableConfig$(): Observable<DynamicTableConfigModel>;
}
