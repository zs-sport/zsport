import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AssociationStateService, CategoryStateService } from '@zsport/api';

@Injectable()
export class AssociationEditResolverService implements Resolve<void> {
    public constructor(
        private associationStateService: AssociationStateService,
        private categoryStateService: CategoryStateService
    ) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.associationStateService.dispatchChangeNewEntityButtonEnabled(false);
        this.categoryStateService.dispatchListEntitiesAction();
    }
}
