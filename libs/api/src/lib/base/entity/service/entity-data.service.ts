import { Observable } from 'rxjs';

import { Model } from '../../model';
import { BaseService } from '../../service';

export abstract class EntityDataService extends BaseService {
    public readonly SEPARATOR: string = '_';

    public abstract add$(model: Model): Observable<Model>;
    public abstract delete$(model: Model): Observable<Model>;
    public abstract list$(): Observable<Model[]>;
    public abstract load$(uid: string): Observable<Model>;
    public abstract update$(model: Model): Observable<Model>;
}
