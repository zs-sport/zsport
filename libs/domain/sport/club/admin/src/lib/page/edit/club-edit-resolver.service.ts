import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AssociationStateService, CategoryStateService, ClubStateService, LocationStateService } from '@zsport/api';

@Injectable()
export class ClubEditResolverService implements Resolve<void> {
    public constructor(
        private locationStateService: LocationStateService,
        private clubStateService: ClubStateService,
        private associationStateService: AssociationStateService,
        private categoryStateService: CategoryStateService
    ) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.locationStateService.dispatchListEntitiesAction();
        this.clubStateService.dispatchChangeNewEntityButtonEnabled(false);
        this.associationStateService.dispatchListEntitiesAction();
        this.categoryStateService.dispatchListEntitiesAction();
    }
}
