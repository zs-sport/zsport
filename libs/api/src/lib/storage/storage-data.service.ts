import { Observable } from 'rxjs';

import { BaseService } from '../base';
import { FileEntity } from './file.entity';

export abstract class StorageDataService extends BaseService {
    public abstract getDownloadURL(path: string): Observable<string>;
    public abstract put(file: FileEntity): unknown;
}
