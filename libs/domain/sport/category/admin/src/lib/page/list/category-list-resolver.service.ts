import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CategoryStateService } from '@zsport/api';

@Injectable()
export class CategoryListResolverService implements Resolve<void> {
    constructor(private categoryStateService: CategoryStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.categoryStateService.dispatchListEntitiesAction();
        this.categoryStateService.dispatchSetSelectedEntityIdAction('');
        this.categoryStateService.dispatchChangeNewEntityButtonEnabled(true);
    }
}
