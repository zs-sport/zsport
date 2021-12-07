import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ResultStateService } from '@zsport/api';

@Injectable()
export class ResultEditResolverService implements Resolve<void> {
    public constructor(private resultStateService: ResultStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.resultStateService.dispatchChangeNewEntityButtonEnabled(false);
    }
}
