import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ResultStateService } from '@zsport/api';

@Injectable()
export class ResultListResolverService implements Resolve<void> {
    constructor(private resultStateService: ResultStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.resultStateService.dispatchListEntitiesAction();
        this.resultStateService.dispatchSetSelectedEntityIdAction('');
        this.resultStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
