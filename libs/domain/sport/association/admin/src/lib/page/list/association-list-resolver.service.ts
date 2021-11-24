import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { AssociationStateService } from '@zsport/api';

@Injectable()
export class AssociationListResolverService implements Resolve<void> {
    constructor(private associationStateService: AssociationStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.associationStateService.dispatchListEntitiesAction();
        this.associationStateService.dispatchSetSelectedEntityIdAction('');
        this.associationStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
