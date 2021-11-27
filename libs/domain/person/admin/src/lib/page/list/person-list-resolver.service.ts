import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PersonStateService } from '@zsport/api';

@Injectable()
export class PersonListResolverService implements Resolve<void> {
    constructor(private personStateService: PersonStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.personStateService.dispatchListEntitiesAction();
        this.personStateService.dispatchSetSelectedEntityIdAction('');
        this.personStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
