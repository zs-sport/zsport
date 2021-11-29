import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {
    AssociationStateService,
    CategoryStateService,
    CompetitionStateService,
    LocationStateService,
} from '@zsport/api';

@Injectable()
export class CompetitionEditResolverService implements Resolve<void> {
    public constructor(
        private competitionStateService: CompetitionStateService,
        private locationStateService: LocationStateService,
        private associationStateService: AssociationStateService,
        private categoryStateService: CategoryStateService
    ) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> | Promise<void> {
        this.competitionStateService.dispatchChangeNewEntityButtonEnabled(false);
        this.locationStateService.dispatchListEntitiesAction();
        this.associationStateService.dispatchListEntitiesAction();
        this.categoryStateService.dispatchListEntitiesAction();
    }
}
