import * as objectHash from 'object-hash';

import { Injectable } from '@angular/core';
import { StorageUtilService } from '@zsport/api';

@Injectable()
export class StorageUtilServiceImpl extends StorageUtilService {
    public constructor() {
        super();
    }

    public createFilePath(data: string, folder: string = '/'): string {
        return folder + objectHash(data);
    }
}
