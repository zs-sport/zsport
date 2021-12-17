import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ArticleStateService, EntityQuantityStateService } from '@zsport/api';

@Injectable()
export class HomePageResolverService implements Resolve<void> {
    public constructor(private entityQuantityStateService: EntityQuantityStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.entityQuantityStateService.dispatchListEntitiesAction();
    }
}
