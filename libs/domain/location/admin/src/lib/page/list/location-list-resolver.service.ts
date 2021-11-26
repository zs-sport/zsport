import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LocationStateService } from '@zsport/api';

@Injectable()
export class LocationListResolverService implements Resolve<void> {
    constructor(private locationStateService: LocationStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.locationStateService.dispatchListEntitiesAction();
        this.locationStateService.dispatchSetSelectedEntityIdAction('');
        this.locationStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
