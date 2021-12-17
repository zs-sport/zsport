import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { HomePageContentBase } from '../../base/home-page-content';

@Injectable()
export class HomePageContentService extends HomePageContentBase {
    public constructor() {
        super();
    }

    public init$(): Observable<boolean> {
        return of(true);
    }
}
