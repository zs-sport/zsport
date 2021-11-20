import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FileEntity, StorageDataService } from '@zsport/api';

@Injectable()
export class StorageDataServiceImpl extends StorageDataService {
    public constructor(private storage: AngularFireStorage) {
        super();
    }

    public getDownloadURL(path: string): Observable<string> {
        return this.storage.ref(path).getDownloadURL();
    }

    public put(file: FileEntity): any {
        return this.storage.ref(file.path).put(file.content, { customMetadata: file.meta });
    }
}
