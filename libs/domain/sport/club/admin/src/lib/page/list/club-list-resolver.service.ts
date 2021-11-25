import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CategoryStateService, ClubStateService } from '@zsport/api';

@Injectable()
export class ClubListResolverService implements Resolve<void> {
    constructor(private categorystateService: CategoryStateService, private clubStateService: ClubStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.clubStateService.dispatchListEntitiesAction();
        this.clubStateService.dispatchSetSelectedEntityIdAction('');
        this.clubStateService.dispatchChangeNewEntityButtonEnabled(true);

        this.categorystateService.dispatchListEntitiesAction();
    }
}
