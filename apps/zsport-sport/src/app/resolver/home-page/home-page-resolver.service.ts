import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CompetitionStateService, EntityQuantityStateService } from '@zsport/api';

@Injectable()
export class HomePageResolverService implements Resolve<void> {
    public constructor(
        private competitionStateService: CompetitionStateService,
        private entityQuantityStateService: EntityQuantityStateService
    ) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.entityQuantityStateService.dispatchListEntitiesAction();
        this.competitionStateService.dispatchListEntitiesAction();
    }
}
