import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { ZsportAdminHomePageContentBase } from '../../base/home-page-content';

@Injectable()
export class ZsportAdminHomePageContentService extends ZsportAdminHomePageContentBase {
    public constructor() {
        super();
    }

    public init$(): Observable<boolean> {
        return of(true);
    }
}
